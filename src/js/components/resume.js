import "babel-polyfill"
import React, { Component } from "react"
import { render } from "react-dom"
import { Grid, Row, Col } from "react-bootstrap"
import Header from "./header/header.js"
import Experience from "./experience/experience.js"
import Contact from "./contact/contact.js"
import Skills from "./skills/active.js"
import TechStack from "./skills/tech-stack.js"
import Languages from "./skills/languages.js"

class Resume extends Component {

    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={ 12 }>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 } sm={ 8 }>
                        { /* About */ }
                        <Experience />
                        { /* Timeline */ }
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <Contact />
                        <Skills />
                        <TechStack />
                        <Languages />
                    </Col>
                </Row>
            </Grid>
        )
    }

}

render(<Resume />, document.getElementById("root"))
