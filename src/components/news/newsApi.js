import React, { Component } from "react";

import axios from "axios";
import Cards from "./newSelect";

export default class newsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentDidMount() {
    const apiKey = "7f830f70a9b541b9bb7957578e96b91c";

    axios
      .get(
        "http://newsapi.org/v2/sources?category=business&language=en&apiKey=" +
          apiKey
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ info: data });
      });
  }

  onChange(field, value) {}
  Info(event) {
    event.preventDefault();
    console.log("clicked");
    this.getInfo();
  }

  render() {
    return (
      <div>
        <Cards info={this.state} onChange={this.onChange.bind(this)} />

        <div></div>
      </div>
    );
  }
}