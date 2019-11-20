import React, { Component } from 'react';
import './Login.css';
import fire from '../../config/Firebase.js';
import { Form, Container, Button } from 'react-bootstrap';
import Errors from "../../components/SiteErrors/Errors";


class Login extends Component {
  state = {
      email: null,
      password: null,
      errors: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then( cred => {
          console.log(cred.user.email);
          this.props.history.push("/");
      }).catch( err => {
          this.setState({ errors: err.message });
      })
  }
  
  inputHandler = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  
  // googleAuthHandler = () => {
  //   // console.log(fire.auth.GoogleAuthProvider());
    
  //   let provider = new fire.auth.GoogleAuthProvider();
  //   fire.auth().signInWithPopup(provider)
  //   .then( (result) => {
  //     console.log(result);
      
  //   }).catch( err => {
  //     console.log(err);
  //   })
  // }

  render() {
      
    let message = null;
      if(this.state.errors) {
        message = (
          <Errors errMessage = {this.state.errors}/>    
        );
    }

      return(
        <div>
          <Container className="Login"> 
            { message }  
            <Form onSubmit={this.handleSubmit} className="loginForm">  
              <Form.Group>
                  {/* <Form.Label> Email </Form.Label> */}
                  <Form.Control type="text" id="email" placeholder="Enter Email" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Form.Group>
                  {/* <Form.Label> Password </Form.Label>   */}
                  <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Button id="btnLogin" variant="outline-primary" type="submit"> LogIn</Button>
            
            </Form> 
            {/* <Button id="btn-google" variant="outline-primary" onClick={this.googleAuthHandler}> Google </Button> */}
          </Container>  
        </div> 
      );
  }
}

export default Login;