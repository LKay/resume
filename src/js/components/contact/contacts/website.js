import React from "react"
import ContactTwoLine from "./contact-two-line.js"

class Website extends ContactTwoLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon = "globe";
    title = "Website";

    getLink () {
        const { value } = this.props

        return (
            <a href={ value } target="_blank">{ value.replace(/https?:\/\//, "") }</a>
        )
    }

}

export default Website
