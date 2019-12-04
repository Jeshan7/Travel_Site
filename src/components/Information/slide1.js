import React from 'react';
import './Slides.css';
import { Col, Row } from 'react-bootstrap';

const Slide1 = () => {
  return(
    <div className="Slide1"> 
      <Row>
        <Col className="column-1" lg= {{ span: 3, offset: 2 }}>
        </Col>
        <Col className="column-2" lg={{ span: 3, offset: 2 }}>
        </Col>
      </Row>
    </div>    
  );
}

export default Slide1;