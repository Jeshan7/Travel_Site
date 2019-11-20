import React from 'react';
import './Budget.css';
import { Button, Container } from 'react-bootstrap';

const Budget = () => {
  
  const buttonHandler1 = () => {
   console.log("hello1");
  }
  
  const buttonHandler2 = () => {
    console.log("hello2");
  }

  return (
    <div>
      <Container className="Budget">
        <Button className="btn-budget-1" variant="outline-primary" onClick={buttonHandler1}>50000-60000</Button> 
        <Button className="btn-budget-2" variant="outline-primary" onClick={buttonHandler2}>70000-100000</Button>    
      </Container>  
    </div>
  );
}

export default Budget;