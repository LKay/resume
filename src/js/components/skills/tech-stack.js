import React, { Component } from "react"
import dataSkills from "../../../../data/skills.json"
import DevIcon from "../common/devicon.js"
import Icon from "react-fontawesome"

class TechStack extends Component {

    renderTechItem (item, idx) {
        return (
            <span key={ idx } className="tech">
                { item.icon && <DevIcon name={ item.icon } className="icon" /> }
                <span>{ ` ${item.text}` }</span>
            </span>
        )
    }

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="cogs" fixedWidth />
                    <span>{ "Tech Stack" }</span>
                </h2>
                <div className="box-content">
                    <div className="tech-stack">
                        { dataSkills.stack.sort((a, b) => a.text.localeCompare(b.text)).map(this.renderTechItem) }
                    </div>
                </div>
            </div>
        )
    }

}

export default TechStack
