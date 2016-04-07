import React, { Component, createElement } from "react"
import dataSkills from "../../../../data/skills.json"
import DevIcon from "../common/devicon.js"

class TechStack extends Component {

    renderContactItem (item, idx) {
        return (
            <span key={ idx } className="tech">
                <DevIcon name={ item.icon } className="icon" />
                <span>{ ` ${item.text}` }</span>
            </span>
        )
    }

    render () {
        return (
            <div className="box">
                <h2>
                    <span>{ "Tech Stack" }</span>
                </h2>

                <div className="tech-stack">
                    { dataSkills.stack.map(this.renderContactItem) }
                </div>
            </div>
        )
    }

}

export default TechStack
