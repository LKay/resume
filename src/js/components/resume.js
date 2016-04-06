import "babel-polyfill"
import React, { Component } from "react"
import { render } from "react-dom"
import { Grid, Row, Col } from "react-bootstrap"

class Resume extends Component {

    render () {
        return (
            <Grid>
                <Row>
                    <Col xs={ 12 }>
                        { /* Header */ }
                    </Col>
                </Row>
                <Row>
                    <Col xs={ 12 } sm={ 7 }>
                        { /* About */ }
                        { /* Experience */ }
                        { /* Timeline */ }
                    </Col>
                    <Col xs={ 12 } sm={ 5 }>
                        { /* Contact */ }
                        { /* Skills - Main */ }
                        { /* Skills - Stack */ }
                        { /* Skills - Languages */ }
                    </Col>
                </Row>
            </Grid>
        )
    }

}

render(<Resume />, document.getElementById("root"))
