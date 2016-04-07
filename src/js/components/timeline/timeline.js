import React, { Component, createElement } from "react"
import { Row, Col } from "react-bootstrap"
import dataTimeline from "../../../../data/timeline.json"
import Icon from "react-fontawesome"
import classNames from "classnames"

class Timeline extends Component {

    renderTimelineItem = (item, idx) => {
        return (
            <li key={ idx }>
                <Row>
                    <Col xs={ 2 } md={ 1 } className="text-center">
                        <div className="year">{ item.year }</div>
                    </Col>
                    <Col xs={ 10 } md={ 11 }>
                        <div className="description">
                            <h3>{ item.title }</h3>
                            <p>{ item.description }</p>
                        </div>
                    </Col>
                </Row>
            </li>
        )
    };

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="graduation-cap" fixedWidth />
                    <span>{ "Education" }</span>
                </h2>

                <div className="box-content">
                    <ul className="education">
                        { dataTimeline.timeline.sort((a, b) => a.year - b.year).map(this.renderTimelineItem) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default Timeline
