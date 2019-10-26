import React from 'react';
import Calendar from 'react-calendar';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';  


const userInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <div>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" id="city"placeholder="City"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control type="text" id="from" placeholder="From"></Form.Control>
            </Form.Group> 

            <Button variant="outline-primary" type="submit">Search</Button>
          </Form>
          <Calendar/>
        </Container>
      </div>
  );
}

export default userInput;