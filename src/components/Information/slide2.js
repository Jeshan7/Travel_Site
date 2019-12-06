import React from 'react';
import './Slides.css';
import { Container } from 'react-bootstrap';

const Slide2 = () => {
  return(
    <div className="Slide2">
      <Container className="quote-container"> 
        <p className="quote-1">The world is a book and those who</p> 
        <br />
        <p className="quote-2">do not travel read only a page.</p>
        <p className="quote-author"> ~ Saint Augustine</p>
      </Container>
    </div>    
  );
}

export default Slide2;