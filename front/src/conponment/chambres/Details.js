import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sliderdetails from '../../slider/Sliderdetails';
import "./Details.css"
const Details = (props) => {

    // console.log(props)
    const id=props.location.pathname.substring(1)
    // console.log(id)
    const det=props.detail.find(el=>el._id===props.match.params.id) 
//   console.log(det)
    return (
//         <div className='az'>

// <div className="card00">
// <div class="title00">
//  <h1>
// {det.title}</h1>
// </div>
// < class="des">
//  <p>{det.type}</p>

/* <div class="image">
   <img src={det.imageUrl[0]}/>
   <img src={det.imageUrl[1]}/>
   <img src={det.imageUrl[2]}/>
</div> */
 <div className='det'>

<div className='wrap'>
  <Sliderdetails/>
  {/* <div className='details'> */}
{/* 
  <div className='imagesss'> 
  <img src={det.imageUrl[0]}/>
</div> */}
 
  <div className='inl'>

<h1>Nom chambre:{det.title}</h1>
<h1>Type:{det.type}</h1>

<p className='desc'>{det.description}</p>
<h1 className='price'>{det.price}DT/nuit</h1>

  <Link to="/Reserver"className="bookbutton">Reserver</Link> 
  </div>
  </div>
</div>

// </div>
  )
}

export default Details