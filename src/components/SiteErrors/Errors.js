import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Errors = (props) => {
  return (
    <div>
      <Container>  
        <Alert variant="danger">
          {props.errMessage}    
        </Alert>
      </Container>
    </div>    
  );    
}

export default Errors;