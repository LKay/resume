import React, { Component } from "react"
import dataSkills from "../../../../data/skills.json"
import Icon from "react-fontawesome"
import classNames from "classnames"

class Languages extends Component {

    renderStars (level) {
        const stars = []

        for (let i = 1; i <= 5; i++) {
            stars.push(<Icon key={ i } name="star" className={ classNames("star", { filled : i <= level }) } />)
        }

        return (
            <div className="stars">
                { stars }
            </div>
        )
    }

    renderLanguageItem = (item, idx) => {
        return (
            <li key={ idx } className="language">
                <span>{ item.name }</span>
                { this.renderStars(item.level) }
            </li>
        )
    };

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="language" fixedWidth />
                    <span>{ "Languages" }</span>
                </h2>

                <div className="box-content">
                    <ul className="languages list-unstyled">
                        { dataSkills.languages.sort((a, b) => b.level - a.level).map(this.renderLanguageItem) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Languages
