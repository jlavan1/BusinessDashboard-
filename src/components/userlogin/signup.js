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
import axios from "axios";
class ModalPage extends Component {
  state = {
    modal2: false,
    fullName: "",
    email: "",
    password: "",
    isLoading: false,
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
      .post("/signup", {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("seccess");
        console.log(response);
        // this.props.history.push(`/signin`)
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
  }

  render() {
    console.log(this.state.fullName + this.state.email + this.state.password);
    return (
      <MDBContainer>
        <MDBBtn rounded onClick={this.toggle(2)}>
          SIGN UP
        </MDBBtn>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggle(2)}
          >
            SIGN UP
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                placeholder="Full Name"
                name="fullName"
                onChange={event =>
                  this.setState({ fullName: event.target.value })
                }
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={event => this.setState({ email: event.target.value })}
              />
              <MDBInput
                label="Your password"
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
            <MDBBtn
              color="deep-orange"
              onClick={event => this.handleClick(event)}
            >
              SIGN UP
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;