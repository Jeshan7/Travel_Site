import React from 'react';
import "./Navbar.css";
import { Nav, Button } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';


const signedOut = () => {
    return (
      <div>
        <Nav className="mr-auto">  
          <NavLink className="link" to="/login">Sign In</NavLink>
          <NavLink className="link" to="/register">Sign Up</NavLink>
        </Nav>
      </div>
    );
}

export default signedOut;