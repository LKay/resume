import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import LessPluginCleanCSS from "less-plugin-clean-css"
import pkg from "./package.json"

const paths = {
    js     : "js/",
    css    : "css/",
    images : "images/",
    fonts  : "fonts/"
}

const config = {
    entry : [
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/only-dev-server",
        path.join(__dirname, "/src/js/compile.js")
    ],
    output : {
        filename   : `${paths.js}bundle.js`,
        path       : path.join(__dirname, "/gh-pages"),
        publicPath : "/"
    },
    module : {
        loaders : [
            { test : /\.js$/, exclude: /node_modules/, loader : "react-hot!babel-loader" },
            { test : /\.css$/, loader : ExtractTextPlugin.extract("style-loader", "css-loader") },
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
            title  : pkg.description,
            minify : {
                collapseWhitespace            : true,
                removeComments                : true,
                removeRedundantAttributes     : true,
                removeScriptTypeAttributes    : true,
                removeStyleLinkTypeAttributes : true
            }
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
    resolve: {
        extensions: ["", ".js", ".json"]
    },
    devtool   : "eval-source-map",
    devServer : {
        contentBase : path.join(__dirname, "/gh-pages/"),
        noInfo      : true,
        port        : 8080,
        hot         : true
    }
}

export default config
