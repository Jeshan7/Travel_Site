import React from 'react';
import './NavbarComponent.css';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; 
import SignedIn from './SignedInComponent.js';
import SignedOut from './SignedOutComponent.js';

const navbar = () => {
    return (
        <div>
            <Navbar className="Navbar" bg="info" expand="lg">
                <Navbar.Brand>Travel</Navbar.Brand> 
                <SignedIn />
                <SignedOut />
                {/* <Nav className="mr-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>   */}
            </Navbar>
        </div>
    );
}

export default navbar;