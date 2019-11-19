import React from 'react';
// import { Link } from 'react-router-dom';
import fire from '../../config/Firebase.js';
import "./NavbarComponent.css";
import { Nav, Button } from 'react-bootstrap';  
import { Link, withRouter } from 'react-router-dom';

const signedIn = (props) => {
  
  const logoutHandler = () => {
    fire.auth().signOut()
      .then( () => {
         console.log("user logged out"); 
         props.history.push("/login");
      })
  }

  return (
      <div>
        <Nav className="mr-auto">  
          <Button id="signin-btn" variant="outline-info">
            <Link id="signin-link" href="Home">Home</Link>
          </Button>
          <Button id="signin-btn" variant="outline-info" onClick={logoutHandler}>LOG OUT</Button>
        </Nav>
      </div>
  );
}

export default withRouter(signedIn);