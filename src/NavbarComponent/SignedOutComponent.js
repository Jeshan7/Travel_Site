import React from 'react';
import { Nav } from 'react-bootstrap'; 

const signedOut = () => {
    return (
      <div>
        <Nav className="mr-auto">  
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="register">Register</Nav.Link>
        </Nav>
      </div>
    );
}

export default signedOut;