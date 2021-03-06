import React, { useState } from 'react';
import './MembersCount.css';
import { Card, Container, Button, CardDeck, FormControl } from 'react-bootstrap';

const MembersCount = (props) => {

  const [adultCount, setAdultCount] = useState(null);
  const [childCount, setChildCount] = useState(null);
  const [infantCount, setInfantCount] = useState(null);
  
  const inputHandler = () => {
   console.log(adultCount);
   props.history.push("/budget");
  }

  return (
    <div>
      <Container className="Members">
        {/* <CardDeck  className="card-members">
          <Card>
            <Card.Header>Adults</Card.Header>
            <FormControl type="number" className="adults" placeholder="0" min={0} onChange={e => setAdultCount(e.target.value)}/>
          </Card>

          <Card>
            <Card.Header>Children</Card.Header>
            <FormControl type="number" className="children" placeholder="0" min={0} onChange={e => setChildCount(e.target.value)} />
          </Card>
          
          <Card>
            <Card.Header>Infants</Card.Header>
            <FormControl type="number" className="infants" placeholder="0" min={0} onChange={e => setInfantCount(e.target.value)} />
          </Card>
        </CardDeck> */}
        <FormControl type="number" className="adults" placeholder="0" />
        <FormControl type="number" className="children" placeholder="0" />
        <FormControl type="number" className="infants" placeholder="0" />
        <Button className="members-btn" variant="outline-primary" onClick={inputHandler}> Next </Button>
      </Container>
    </div>
  );
}

export default MembersCount;