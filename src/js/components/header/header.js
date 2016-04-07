import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import dataInfo from "../../../../data/info.json"

class Header extends Component {

    render () {
        return (
            <header className="top text-center">
                <div className="avatar">
                    <img src={ require("../../../images/avatar.jpg") } alt="avatar" />
                </div>
                <div className="text-header">
                    <h1 className="hidden-print">{ "Hello, stranger!" }</h1>
                    <h2>
                        <p>
                            <span className="hidden-print">{ "my name is" }</span>
                            <span className="name">{ dataInfo.firstName }</span>
                            <span className="name visible-print-inline">{ dataInfo.lastName }</span>
                        </p>
                        <p className="hidden-print">
                            <span>{ "I am software developer and this is my resume" }</span>
                        </p>
                    </h2>
                </div>
            </header>
        )
    }

}

export default Header
