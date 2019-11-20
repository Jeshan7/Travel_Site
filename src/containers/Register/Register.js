import React, { Component } from 'react';
import './Register.css';
import fire from '../../config/Firebase.js';
import { Container, Form, Button } from 'react-bootstrap';
import Errors from "../../components/SiteErrors/Errors";

class Register extends Component { 
    state = {
        name: null,
        email: null,
        phoneNo: null,
        password: null,
        repeatPassword: null,
        errors: ""
    }

    // Validation = () => {
      
    //   let emailReg = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
      
    //   if(!emailReg.test(this.state.email)){
    //     console.log("error");
    //   } else {
    //     console.log("no error");
        
    //   }
    //   } 
    
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
        }).catch( err =>  {
            this.setState({ errors: err.message});
      });
      this.props.history.push("/");
    }
    
    inputHandler = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    render() {

      let message = null;
      
      if(this.state.errors) {
        message = (
          <Errors errMessage = {this.state.errors}/>    
        );
      }

      return(
        <div>
          <Container className="registerContainer">
            { message }
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                  <Form.Control type="text" id="name" placeholder="Name" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Control type="text" id="phoneNo" placeholder="Phone Number" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}></Form.Control>
              </Form.Group>

              <Form.Group>
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