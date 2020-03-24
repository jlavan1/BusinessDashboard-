import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class FullPageIntroWithFixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

  handleClick = event => {
    event.preventDefault()
   console.log('done')
    localStorage.removeItem("usertoken")
    // Remove the user object from the Redux store
    // this.props.logoutUser()
  }
    render() {
        console.log()
        return (
            <div>
                <MDBNavbar color="indigo" dark expand="md" fixed="top">
                    <MDBNavbarBrand href="/">
                        <strong>Bussiness Dashboard App</strong>
                    </MDBNavbarBrand>
                    {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBNavLink to="#">Link</MDBNavLink>
                            </MDBNavItem> */}
                            <MDBNavItem>
                                <MDBNavLink to='/signin'>SignIn</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to='/signup' onClick={this.handleClick}>Sign Up</MDBNavLink>
                             
                            </MDBNavItem>
                            <MDBNavItem >
                                <MDBNavLink to='/dashboard'>Dashboard</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to='/signup' onClick={this.handleClick}>Log Out</MDBNavLink>
                             
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>


                {/* 
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main> */}

            </div>
        );
    }
}

export default FullPageIntroWithFixedNavbar;