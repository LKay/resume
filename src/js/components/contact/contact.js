import React, { Component, createElement } from "react"
import * as types from "./types.js"
import dataInfo from "../../../../data/info.json"
import Facebook from "./contacts/facebook.js"

class Contact extends Component {

    renderContactItem (item, idx) {
        let content
        
        switch (item.type) {
            case types.CONTACT_EMAIL :

            case types.CONTACT_PHONE :

            case types.CONTACT_SKYPE :

            case types.CONTACT_FACEBOOK :
                content = (<Facebook { ...item } />)
                break

            case types.CONTACT_GITHUB :

            default :
                content = false
        }

        console.warn(content, item, types)
        
        return content && createElement("li", { key : idx }, content)
    }

    render () {
        return (
            <div className="box clearfix">
                <h2>
                    <span>{ "Contact" }</span>
                </h2>

                <ul className="contacts list-unstyled">
                    { dataInfo.contacts.map(this.renderContactItem) }
                </ul>
            </div>
        )
    }

}

export default Contact
