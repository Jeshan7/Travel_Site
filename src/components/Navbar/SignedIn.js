import React from 'react';
// import { Link } from 'react-router-dom';
import fire from '../../config/Firebase.js';
import "./Navbar.css";
import { Nav, Button } from 'react-bootstrap';  
import { Link, withRouter } from 'react-router-dom';

const signedIn = (props) => {
  
  const logoutHandler = () => {
    fire.auth().signOut()
      .then( () => {
         console.log("user logged out"); 
      })
  }

  return (
      <div>
        <Nav className="mr-auto">  
          <Link id="signin-link" to="/">Home</Link>
          <Button id="signin-btn" variant="outline-info" onClick={logoutHandler}>Log Out</Button>
        </Nav>
      </div>
  );
}

export default withRouter(signedIn);