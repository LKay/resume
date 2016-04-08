import React, { Component } from "react"
import Icon from "react-fontawesome"

class ContactOneLine extends Component {

    static propTypes = {
        value : React.PropTypes.node.isRequired
    };

    static defaultProps = {
        value : false
    };

    icon = false;

    getLink () {
        const { value } = this.props

        return (
            <a href={ value } target="_blank">{ value }</a>
        )
    }

    render () {
        return (
            <div className="contact-item contact-one-line">
                <div className="contact-icon text-center">
                    <Icon name={ this.icon } fixedWidth />
                </div>
                <div className="contact-content">
                    <div className="title">{ this.getLink() }</div>
                </div>
            </div>
        )
    }

}

export default ContactOneLine
