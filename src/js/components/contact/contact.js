import React, { Component, createElement } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import Icon from "react-fontawesome"
import * as types from "./types.js"
import dataInfo from "../../../../data/info.json"

class Contact extends Component {

    renderContactItem (item, idx) {
        let content
        
        switch (item) {
            case types.CONTACT_EMAIL :

            case types.CONTACT_PHONE :

            case types.CONTACT_SKYPE :

            case types.CONTACT_FACEBOOK :

            case types.CONTACT_GITHUB :

            default :
                content = false
        }
        
        return content && createElement("li", { key : idx }, content)

                /*
            <div key={ idx } className="contact-item">
            <div className="icon pull-left text-center">
            <Icon name="facebook" fixedWidth />
        </div>
        <div className="title pull-right">Facebook</div>
            <div className="description pull-right">https://www.facebook.com/facebook</div>
    </div>
    */
    }

    render () {
        return (
            <div className="box clearfix">
                <h2>Contact</h2>

                <ul className="list-unstyled">
                    { dataInfo.contacts.map(this.renderContactItem) }
                </ul>
            </div>
        )
    }

}

export default Contact
