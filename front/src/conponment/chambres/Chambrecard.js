import {  Carousel, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import './chambrecard.css'
import { Link } from 'react-router-dom';


const Chambrecard = ({chambre}) => {
  //card//
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//card//

  return <div>

<div  class="rooms-cards-wrapper">
            <div onClick={handleShow}class="room-card">
            <div className='back'> 
                    <h4 class="room-card-heading">{chambre.title}</h4>
              </div>
                <img src={chambre.imageUrl[0]} class="room-img"/>
                <div class="room-card-content">
             
                    
                    {/* <p class="room-price">{chambre.price}DT</p> */}
               
                </div>
            </div>
    
</div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <h3 className='title' >{chambre.title}</h3>
          </Modal.Header>
  <Modal.Body>

<Carousel className='caro' >
            {chambre.imageUrl.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    src={url}
                    style={{ height: "250px" }}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p class="room-card-paragraph">{chambre.description}</p>
          </Modal.Body>
        <Modal.Footer>
           <p class="room-price">Prix de nuit :{chambre.price}DT</p>
        <Link to="/reserver"className="bookbutton">RÉSERVER</Link>     
        </Modal.Footer>
      </Modal>





  </div>;
};

export default Chambrecard;
