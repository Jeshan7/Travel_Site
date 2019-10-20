import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';


class Login extends Component {
    state = {
        email: null,
        password: null
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
                <Form.Group>
                    <Form.Label> Email </Form.Label>
                    <Form.Control type="text" id="email" placeholder="Enter Email" onChange={this.inputHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Password </Form.Label>  
                    <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}></Form.Control>
                </Form.Group>
                <Button variant="outline-primary" type="submit"> LogIn</Button>
              </Form>
            </Container>    
          </div> 
        );
    }
}

export default Login;