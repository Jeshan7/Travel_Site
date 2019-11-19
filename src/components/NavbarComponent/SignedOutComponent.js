import React from 'react';
import "./NavbarComponent.css";
import { Nav, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';


const signedOut = () => {
    return (
      <div>
        <Nav className="mr-auto">  
          <Button id="signin-btn" variant="outline-info">
            <Link id="signin-link" to="/login">Login</Link>
          </Button>
          <Button id="signin-btn" variant="outline-info">
            <Link id="signin-link" to="/register">Register</Link>
          </Button>
        </Nav>
      </div>
    );
}

export default signedOut;