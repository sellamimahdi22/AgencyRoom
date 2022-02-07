import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Chambrecard = ({chambre}) => {
  const dispatch = useDispatch()

  return <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{chambre.title}</Card.Title>
    <Card.Title>{chambre.description}</Card.Title>
    <Card.Title>{chambre.type}</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>;
};

export default Chambrecard;
