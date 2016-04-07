import React, { Component, createElement } from "react"
import * as types from "./types.js"
import dataInfo from "../../../../data/info.json"
import Icon from "react-fontawesome"
import Email from "./contacts/email.js"
import Phone from "./contacts/phone.js"
import Skype from "./contacts/skype.js"
import LinkedIn from "./contacts/linkedin.js"
import GitHub from "./contacts/github.js"
import Facebook from "./contacts/facebook.js"


class Contact extends Component {

    renderContactItem (item, idx) {
        let content

        switch (item.type) {
            case types.CONTACT_EMAIL :
                content = (<Email { ...item } />)
                break

            case types.CONTACT_PHONE :
                content = (<Phone { ...item } />)
                break

            case types.CONTACT_SKYPE :
                content = (<Skype { ...item } />)
                break

            case types.CONTACT_LINKEDIN :
                content = (<LinkedIn { ...item } />)
                break

            case types.CONTACT_FACEBOOK :
                content = (<Facebook { ...item } />)
                break

            case types.CONTACT_GITHUB :
                content = (<GitHub { ...item } />)
                break

            default :
                content = false
        }

        return content && createElement("li", { key : idx }, content)
    }

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="envelope" fixedWidth />
                    <span>{ "Contact" }</span>
                </h2>
                <div className="box-content">
                    <ul className="contacts list-unstyled">
                        { dataInfo.contacts.map(this.renderContactItem) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Contact
