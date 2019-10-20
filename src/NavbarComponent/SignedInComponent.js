import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';  

const signedIn = () => {
  return (
      <div>
        <Nav className="mr-auto">  
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="logout">Logout</Nav.Link>
        </Nav>
      </div>
  );
}

export default signedIn;