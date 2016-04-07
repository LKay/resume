import React, { Component } from "react"
import ContactTwoLine from "./contact-two-line.js"

class Skype extends ContactTwoLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon  = "skype";
    title = "Skype";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `skype:${value}` }>{ value }</a>
        )
    }

}

export default Skype
