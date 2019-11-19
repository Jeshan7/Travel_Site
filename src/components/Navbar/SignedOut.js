import React from 'react';
import "./Navbar.css";
import { Nav, Button } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';


const signedOut = () => {
    return (
      <div>
        <Nav className="mr-auto">  
          <NavLink id="signin-link" to="/login">Login</NavLink>
          <NavLink id="signin-link" to="/register">Register</NavLink>
        </Nav>
      </div>
    );
}

export default signedOut;