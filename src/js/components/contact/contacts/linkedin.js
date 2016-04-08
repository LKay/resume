import React from "react"
import ContactTwoLine from "./contact-two-line.js"

class LinkedIn extends ContactTwoLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon = "linkedin-square";
    title = "LinkedIn";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `https://www.linkedin.com/in/${value}` } target="_blank">{ `linkedin.com/in/${value}` }</a>
        )
    }

}

export default LinkedIn
