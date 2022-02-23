import React from 'react'
import { Link } from 'react-router-dom'
import "./Accueil.css"
const Accueil = () => {
  return (
   <div className='accueil'>
<h2>Vivez une expérience de luxe</h2>
<div className='slider'> 
<Link to="/chambres" className='btn1'>Chambres</Link>
</div>
   </div>
  )
}

export default Accueil


