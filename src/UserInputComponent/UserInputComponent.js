import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';  

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
                <Form.Label>Number of days</Form.Label>
                <Form.Control type="text" id="daysCount" placeholder="Number of days"></Form.Control>
            </Form.Group>
            
            <Button variant="outline-primary" type="submit">Search</Button>
          </Form>    
        </Container>
      </div>
  );
}

export default userInput;