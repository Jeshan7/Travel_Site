import React from 'react';
import { Card, Col, Container, Row, Button, CardDeck } from 'react-bootstrap';

const MembersCount = () => {
  return (
    <div>
      <Container>
        <CardDeck>
          <Card>
            <Card.Header>Adults</Card.Header>
            <Card.Text>adkmlakdmlkadm</Card.Text>
          </Card>
          <Card>
            <Card.Header>Children</Card.Header>
            <Card.Text>aldamdlsmd</Card.Text>
          </Card>
          <Card>
            <Card.Header>Infants</Card.Header>
            {/* <Card.Text>kamdlkdams</Card.Text> */}
            <Row>
            <Col lg={8}>    
              <Button variant="outline-primary">+</Button>
            </Col> 
              <Button variant="outline-primary">-</Button>
            </Row>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default MembersCount;