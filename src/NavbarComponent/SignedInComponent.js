import React from 'react';
// import { Link } from 'react-router-dom';
import fire from '../config/Firebase.js';
import { Nav } from 'react-bootstrap';  

const signedIn = () => {
  
  const logoutHandler = () => {
    fire.auth().signOut()
      .then( () => {
         console.log("user logged out"); 
      })
  }

  return (
      <div>
        <Nav className="mr-auto">  
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        </Nav>
      </div>
  );
}

export default signedIn;