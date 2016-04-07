import React from "react"
import ContactTwoLine from "./contact-two-line.js"

class GitHub extends ContactTwoLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon = "github";
    title = "GitHub";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `https://github.com/${value}` } target="_blank">{ `github.com/${value}` }</a>
        )
    }

}

export default GitHub
