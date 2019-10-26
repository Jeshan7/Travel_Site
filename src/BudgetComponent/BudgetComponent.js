import React from 'react';
import './BudgetComponent.css';
import { Button } from 'react-bootstrap';

const Budget = () => {
    return (
      <div>
        <Button className="rangeBtn" variant="outline-primary">50000-60000</Button>      
      </div>
    );
}

export default Budget;