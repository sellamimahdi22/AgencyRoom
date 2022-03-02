import {  Button, Carousel, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import './chambrecard.css'
import { Link } from 'react-router-dom';
import Details from './Details';


const Chambrecard = ({chambre}) => {
  //card// const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  
//card//

  return(
   <div >

<div className="card">

<div class="image">
   <img src={chambre.imageUrl[0]}/>
</div>
<div class="title">
 <h1>
{chambre.title}</h1>
</div>
<div class="des">
 <p>{chambre.type}</p>
 <Link to={`/chambres/details/${chambre._id}`}className="bookbutton">details
 </Link>
 
  

</div>
</div>


             



  </div>
  )
};

export default Chambrecard;
