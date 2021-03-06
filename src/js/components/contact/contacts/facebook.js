import React from "react"
import ContactTwoLine from "./contact-two-line.js"

class Facebook extends ContactTwoLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon = "facebook";
    title = "Facebook";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `https://www.facebook.com/${value}` } target="_blank">{ `facebook.com/${value}` }</a>
        )
    }

}

export default Facebook
