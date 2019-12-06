import React from 'react';
import './Navbar.css';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import logo from "../../assets/logo/travel.svg";

const navbar = (props) => {

    let signedInLinks = null;
    let signedOutLinks = null;
    
    if(props.isUser){
      signedInLinks = <SignedIn />;
    } else {
        signedOutLinks = <SignedOut />;
    }
    
    return (
        <div>
            <Navbar className="Navbar" expand="lg">
              <Navbar.Brand href="/">
              <img
                src= {logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              </Navbar.Brand> 
                {signedInLinks}
                {signedOutLinks}
              <Navbar.Text className="nav-text">
                { props.isUser ? "Signed in as: " + props.userEmail : null }   
              </Navbar.Text>
              {/* <Navbar.Footer>
                jjdsn
              </Navbar.Footer>  */}
            </Navbar>
        </div>
    );
}

export default navbar;