import React, { Component } from 'react';
import './RegisterComponent.css';
import fire from '../config/Firebase.js';
import { Container, Form, Button } from 'react-bootstrap';
import { firestore } from 'firebase';


class Register extends Component { 
    state = {
        name: null,
        email: null,
        phoneNo: null,
        password: null,
        repeatPassword: null
    }
    
    handleSubmit = (e) => {
      e.preventDefault(); 
      // console.log(this.state);
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( cred => {
          return fire.firestore().collection('Users').doc(cred.user.uid).set({
                   name: this.state.name,
                   phone: this.state.phoneNo,
                   repeatPassword: this.state.repeatPassword
          });
          // console.log(cred.user.uid);    
      }).catch( err =>  {
          console.log(err);
      });
    }
    
    inputHandler = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    render() {
        return(
            <div>
              <Container className="registerContainer">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                      {/* <Form.Label> Name </Form.Label> */}
                      <Form.Control type="text" id="name" placeholder="Name" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      {/* <Form.Label>Email</Form.Label>    */}
                      <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      {/* <Form.Label>Phone Number</Form.Label>    */}
                      <Form.Control type="text" id="phoneNo" placeholder="Phone Number" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      {/* <Form.Label>Password</Form.Label>    */}
                      <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      {/* <Form.Label>Repeat Password</Form.Label>    */}
                      <Form.Control type="password" id="repeatPassword" placeholder="Repeat Password" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>
                  <Button id="btnRegister" variant="outline-primary" type="submit">Register</Button>
                </Form>
              </Container>
            </div>
        );
    }
}

export default Register;