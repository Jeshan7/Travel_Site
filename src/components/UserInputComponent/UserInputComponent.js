import React from 'react';
import Calendar from 'react-calendar';
import './UserInputComponent.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';  


const userInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <div>
        <Container className="UserContainer">
          <Form className="uForm" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="text" id="city"placeholder="Type the destination"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" id="city" placeholder="From"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" id="duration" placeholder="Select Duration"></Form.Control>
            </Form.Group> 
            
            <Form.Group>
              <Form.Control type="text" id="month" placeholder="Select Month"></Form.Control>
            </Form.Group> 

            <Button id="user-btn" variant="outline-primary" type="submit">Search</Button>
          </Form>
          {/* <Calendar/> */}
        </Container>
      </div>
  );
}

export default userInput;