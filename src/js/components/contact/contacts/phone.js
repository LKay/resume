import React, { Component } from "react"
import ContactOneLine from "./contact-one-line.js"

class Phone extends ContactOneLine {

    static propTypes = {
        value : React.PropTypes.string.isRequired
    };

    icon  = "phone";

    getLink () {
        const { value } = this.props

        return (
            <a href={ `tel:${value}` }>{ value }</a>
        )
    }

}

export default Phone
