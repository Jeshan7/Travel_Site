import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './UserInput.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';  

const userInput = (props) => {

  const [destination, setDestination] = useState(null);
  const [city, setCity] = useState(null);
  const [duration, setDuration] = useState(null);
  const [month, setMonth] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/members');
  }

  return (
      <div>
        <Container className="User">
          <Form className="input-form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="text" 
                            className="destination"
                            placeholder="Type the destination"
                            onChange={(e) => setDestination(e.target.value) } />
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" 
                            className="city"
                            placeholder="From"
                            onChange={(e) => setCity(e.target.value) } />
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" 
                            className="duration"
                            placeholder="Select Duration" 
                            onChange={(e) => setDuration(e.target.value) } />
            </Form.Group> 
            
            <Form.Group>
              <Form.Control type="text"
                            className="month"
                            placeholder="Select Month"
                            onChange={(e) => setMonth(e.target.value) } />
            </Form.Group> 

            <Button className="user-btn" variant="outline-primary" type="submit">Search</Button>
          </Form>
          {/* <Calendar/> */}
        </Container>
      </div>
  );
}

export default userInput;