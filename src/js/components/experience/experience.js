import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import dataExperience from "../../../../data/experience.json"
import Icon from "react-fontawesome"

class Experience extends Component {

    renderJobItem = (item, idx) => {
        return (
            <Row key={ idx } className="job">
                <Col xs={ 4 } sm={ 3 }>
                    <div className="company">{ item.company }</div>
                    <div className="location">
                        <Icon name="map-marker" fixedWidth />
                        <span>{ item.location }</span>
                    </div>
                    <div className="year">
                        <Icon name="calendar-o" fixedWidth />
                        <span>{ `${item.from} - ${item.to}` }</span>
                    </div>
                </Col>
                <Col xs={ 8 } sm={ 9 }>
                    <div className="profession">{ item.title }</div>
                    <div className="description">{ item.description }</div>
                </Col>
            </Row>
        )
    };

    render () {
        return (
            <div className="box">
                <h2>
                    <Icon name="briefcase" fixedWidth />
                    <span>{ "Experience" }</span>
                </h2>

                <div className="box-content">
                    {
                        dataExperience.jobs
                            .sort((a, b) => {
                                const from = b.from - a.from
                                const to = b.to - a.to
                                return from !== 0 ? from : to
                            })
                            .map(this.renderJobItem)
                    }
                </div>
            </div>
        )
    }

}

export default Experience
