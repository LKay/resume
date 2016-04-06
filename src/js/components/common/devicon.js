import React, { Component, createElement } from "react"
import { Container } from "react-bootstrap"
import classNames from "classnames"

class DevIcon extends Component {

    static propTypes = {
        className : React.PropTypes.string,
        name      : React.PropTypes.string
    };

    render () {
        const {
            className,
            name,
            ...props
        } = this.props
        const classes = classNames(
            "devicons",
            `devicons-${name}`,
            className
        )


        return createElement("span", Object.assign({}, props, { className : classes }))
    }

}

export default DevIcon
