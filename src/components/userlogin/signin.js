import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter
} from "mdbreact";
import { Redirect } from "react-router-dom";
import "./index.css";
import axios from "axios";

class ModalPage extends Component {
  state = {
    modal2: false,
    email: "",
    password: "",
    error: true
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.fullName + this.state.email + this.state.password);

    axios
      .post("/signin", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("x-auth-token", response.data);

        return response.data;
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
  }

  render() {
    console.log(this.state.email + this.state.password);
    return (
      <MDBContainer>
        <MDBBtn rounded onClick={this.toggle(1)}>
          SIGN IN
        </MDBBtn>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle(1)}
          >
            Sign in
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            {/* <MDBBtn onClick={this.toggle(1)}>Login</MDBBtn> */}
            <MDBBtn onClick={event => this.handleClick(event)}>Login</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
