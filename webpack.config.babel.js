import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import LessPluginCleanCSS from "less-plugin-clean-css"
import autoprefixer from "autoprefixer"
import pkg from "./package.json"

const paths = {
    js     : "js/",
    css    : "css/",
    images : "images/",
    fonts  : "fonts/"
}

const config = {
    entry : process.argv.indexOf("-p") !== -1 ? [path.join(__dirname, "/src/js/compile.js")] : [
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/only-dev-server",
        path.join(__dirname, "/src/js/compile.js")
    ],
    output : {
        filename   : `${paths.js}bundle.js`,
        path       : path.join(__dirname, "/gh-pages"),
        publicPath : "/resume/"
    },
    module : {
        loaders : [
            { test : /\.js$/, exclude: /node_modules/, loader : "react-hot-loader!babel-loader" },
            { test : /\.css$/, loader : ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
            { test : /\.less$/, loader : ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test : /\.json$/, loader : "json-loader" },
            { test : /\.(eot|svg|ttf|woff|woff2)/, loader : `file-loader?name=${paths.fonts}[name].[ext]` },
            { test : /\.(png|jpg)$/, loader : `file-loader?name=${paths.images}[name].[ext]` }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin(`${paths.css}bundle.css`),
        new HtmlWebpackPlugin({
            inject     : false,
            template   : path.join(__dirname, "/node_modules/html-webpack-template/index.ejs"),
            appMountId : "root",
            devServer  : process.argv.indexOf("-p") === -1 ? "http://localhost:8080" : false,
            title      : pkg.description,
            mobile     : true,
            minify     : {
                collapseWhitespace            : true,
                removeComments                : true,
                removeRedundantAttributes     : true,
                removeScriptTypeAttributes    : true,
                removeStyleLinkTypeAttributes : true
            },
            googleAnalytics: {
                trackingId: "UA-76151718-1",
                pageViewOnLoad: true
            },
        })
    ],
    lessLoader: {
        lessPlugins: [
            new LessPluginCleanCSS({
                advanced            : true,
                keepSpecialComments : false
            })
        ]
    },
    postcss: [ autoprefixer({ browsers: ["last 2 versions"] }) ],
    resolve: {
        extensions: ["", ".js", ".json"]
    },
    devtool   : process.argv.indexOf("-p") === -1 ? "eval-source-map" : false,
    devServer : {
        contentBase : path.join(__dirname, "/gh-pages/"),
        port        : 8080,
        hot         : true
    }
}

export default config
