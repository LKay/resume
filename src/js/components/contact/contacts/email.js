import React, { Component } from "react"
import ContactOneLine from "./contact-one-line.js"

class Email extends ContactOneLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon  = "at";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `mailto:${value}` }>{ value }</a>
        )
    }

}

export default Email
