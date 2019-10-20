import React, { Component } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';


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
      console.log(this.state);
      
    }
    
    inputHandler = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    render() {
        return(
            <div>
              <Container>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row}>
                      <Form.Label> Name </Form.Label>
                      <Col sm={4}><Form.Control type="text" id="name" placeholder="Name" onChange={this.inputHandler}></Form.Control></Col>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Email</Form.Label>   
                      <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Phone Number</Form.Label>   
                      <Form.Control type="text" id="phoneNo" placeholder="Phone Number" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Password</Form.Label>   
                      <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Repeat Password</Form.Label>   
                      <Form.Control type="password" id="repeatPassword" placeholder="Repeat Password" onChange={this.inputHandler}></Form.Control>
                  </Form.Group>
                  <Button variant="outline-primary" type="submit">Register</Button>
                </Form>
              </Container>
            </div>
        );
    }
}

export default Register;