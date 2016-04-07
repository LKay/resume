import "custom-event-polyfill"
import React, { Component } from "react"
import { findDOMNode } from "react-dom"
import dataSkills from "../../../../data/skills.json"
import Icon from "react-fontawesome"
import classNames from "classnames"
import DevIcon from "../common/devicon.js"
import withinviewport from "withinviewport"

const LEVEL_PROFICENT = 1
const LEVEL_ADVANCED = 2
const LEVEL_EXPERT = 3
const THROTTLE_INTERVAL = 10

function throttleScroll () {
    let running = false
    const fn = () => {
        if (running) {
            return false
        }
        running = true
        setTimeout(() => {
            global.dispatchEvent(new CustomEvent("scrollThrottled"))
            running = false
        }, THROTTLE_INTERVAL)
    }
    global.addEventListener("scroll", fn)
}


class Active extends Component {

    state = {
        inViewPort : false
    };
    
    componentDidMount () {
        throttleScroll()
        global.addEventListener("scrollThrottled", this.checkViewPort)
        this.checkViewPort()
    }

    componentWillUnmount () {
        global.removeEventListener("scrollThrottled", this.checkViewPort)
    }

    checkViewPort = () => {
        if (this.state.inViewPort) {
            return false
        }

        const el = findDOMNode(this.refs.skills)
        const height = el.getBoundingClientRect().height
        const inViewPort = withinviewport(el, { sides: "top bottom", top : -height + 10, bottom : -height + 30 });

        this.setState({ inViewPort },  () => {
            if (inViewPort) {
                global.removeEventListener("scrollThrottled", this.checkViewPort)
            }
        })
    }

    renderSkillItem = (item, idx) => {
        const classes = classNames("bar", {
            proficent : item.level === LEVEL_PROFICENT,
            advanced  : item.level === LEVEL_ADVANCED,
            expert    : item.level === LEVEL_EXPERT
        })

        return (
            <li key={ idx } className="skill">
                <div className={ classes }>
                    <DevIcon name={ item.icon } />
                    <span>{ item.text }</span>
                </div>
            </li>
        )
    };

    renderLegend () {
        return (
            <li className="legend">
                <span>
                    <span className="marker" />
                </span>

                <ul className="list-inline">
                    <li>{ "Beginner" }</li>
                    <li>{ "Proficient" }</li>
                    <li>{ "Advanced" }</li>
                    <li>{ "Expert" }</li>
                </ul>
            </li>
        )
    }

    render () {
        const classes = classNames(
            "skills",
            "list-unstyled",
            { "in-viewport" : this.state.inViewPort }
        )

        return (
            <div className="box">
                <h2>
                    <Icon name="star" fixedWidth />
                    <span>{ "Skills" }</span>
                </h2>

                <div className="box-content">
                    <ul className={ classes } ref="skills">
                        { dataSkills.active.sort((a, b) => b.level - a.level).map(this.renderSkillItem) }
                        { this.renderLegend() }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Active
