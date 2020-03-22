import React, { Component } from "react";

import { Form } from "react-bootstrap";
import Card from "./news";
import "./news.css";

export default class newCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const info = this.props.info.info;
    if (Object.keys(info).length !== 0 && info.error !== "No Record Found") {
      return (
        <div className="card">
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label></Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={this.handleChange.bind(this)}
              >
                <option>Select</option>
                {info.sources.map((data, index) => {
                  return (
                    <option key={index} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form>
          <Card select={this.state.value} />
        </div>
      );
    }
    return <div></div>;
  }
}