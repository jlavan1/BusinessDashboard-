import React, { Component } from "react";
import Stock from "./stock";

class Layout extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            {" "}
            <Stock />{" "}
          </div>
          <div class="col">
            {" "}
            <Stock />{" "}
          </div>
          <div class="w-100"></div>
          <div class="col">
            {" "}
            <Stock />{" "}
          </div>
          <div class="col">
            {" "}
            <Stock />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;