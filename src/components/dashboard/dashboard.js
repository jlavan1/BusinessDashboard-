import React, { Component } from "react";
import News from "../news/newsApi";
import Reminder from "../reminder/Reminders";
import WeatherEngine from "../WeatherCard/WeatherEngine";
import ComponentSelect from '../Navbars/ComponentSelect';
//import Stock from "../stock/stock";
//import Plot from "react-plotly.js";
import "./dash.css";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid>
            <Container>
              <h1>Welcome </h1>
              <p></p>
              <div></div>
            </Container>
          </Jumbotron>
        </div>
        <div>
          <Container>
            <Row>
              <Col lg="5" style={{ height: "500px" }}>
                <News />
                <br />
                <ComponentSelect
                  Render={({ on, toggle }) => (
                    <div>
                      {on && <h1>{News}</h1>}
                      <button onClick={toggle}>Show / Hide</button>
                    </div>
                  )}
                />
              </Col>
              <Col lg="" style={{ height: "100px" }}>
                {/* <Stock /> */}
              </Col>
              <Col lg="4" style={{ height: "200px" }}>
                <Reminder />
              </Col>
              <Col lg="3" style={{ height: "500px" }}>
                <WeatherEngine location="Houston, USA" />
              </Col>
            </Row>
          </Container>
        </div>
        no
      </div>
    );
  }
}
