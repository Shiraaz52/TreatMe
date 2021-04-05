import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {logout} from "../actions/auth"


class NavigationBar extends React.Component
{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render()
    {
        const {isAuthenticated} = this.props.auth

        const authLinks = (
           
                    <LinkContainer to="#" onClick = {this.props.logout}>
                        <Nav.Link >Logout</Nav.Link>
                    </LinkContainer>
                   

        )
        const guestLinks = (
            <>
                   <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
            </>

        )
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {isAuthenticated ? authLinks : guestLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );}
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{logout})(NavigationBar);