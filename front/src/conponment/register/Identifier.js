import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import  {useDispatch, useSelector }  from 'react-redux';
import { loginUser } from '../../redux/Actions/UserAction';
const Identifier = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const dispatch = useDispatch();
    const handleident=(e)=>{
        e.preventDefault();
        dispatch(loginUser({Email,password}))
    }
  return <div>
    <h1> S'identifier</h1>
    <Form>

    <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>mot de passe</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="mot de passe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </Form.Group>
        <Button onClick={handleident}>Confirmer</Button>
            </Form>
  </div>;
};

export default Identifier
;
