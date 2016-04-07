import React, { Component } from "react"
import dataInfo from "../../../../data/info.json"
import Icon from "react-fontawesome"

class About extends Component {

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="user" fixedWidth />
                    <span>{ "About Me" }</span>
                </h2>

                <div className="box-content">
                    <p className="text-justify">{ dataInfo.about }</p>
                </div>
            </div>
        )
    }

}

export default About
