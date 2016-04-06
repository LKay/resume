import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Icon from "react-fontawesome"

class ContactTwoLine extends Component {

    static propTypes = {
        value : React.PropTypes.node.isRequired
    };

    static defaultProps = {
        value : false
    };

    icon  = false;
    title = false;

    getLink () {
        const { value } = this.props

        return (
            <a href={ value } target="_blank">{ value }</a>
        )
    }

    render () {
        return (
            <div className="contact-item contact-two-line">
                <div className="contact-icon text-center">
                    <Icon name={ this.icon } fixedWidth />
                </div>
                <div className="contact-content">
                    <div className="title">{ this.title }</div>
                    <div className="description">{ this.getLink() }</div>
                </div>
            </div>
        )
    }

}

export default ContactTwoLine
