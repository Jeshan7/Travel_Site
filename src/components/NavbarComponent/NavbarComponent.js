import React from 'react';
import './NavbarComponent.css';
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import SignedIn from './SignedInComponent';
import SignedOut from './SignedOutComponent';

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
            <Navbar className="Navbar" bg="info" expand="lg">
                <Navbar.Brand>Travel</Navbar.Brand> 
                {signedInLinks}
                {signedOutLinks}
                <Navbar.Text>
                  { props.isUser ? "Signed in as: " + props.userEmail : null }   
                </Navbar.Text>
            </Navbar>
        </div>
    );
}

export default navbar;