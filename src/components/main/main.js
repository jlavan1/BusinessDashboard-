import React, { Component } from 'react';
import Signin from '../userlogin/signin'
import Signup from '../userlogin/signup'
import { MDBJumbotron, MDBContainer } from "mdbreact"
import { Col, Container, Row } from 'react-bootstrap'
import './main.css';
export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
////

    render() {
        return (
            <div className='main'>
                <MDBJumbotron >
                    <MDBContainer className='title'>

                        <h2 className="display-4">Business Dashboard App</h2>
                        <p className="lead"></p>
                        <Container >
                            <Row >
                                <Col><Signin /></Col>
                                <Col><Signup /></Col>
                            </Row>
                        </Container>
                        <Container >
                            <Row >
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </MDBContainer>
                </MDBJumbotron>
                <div className='login'>

                </div>
            </div>
        );
    }
}
