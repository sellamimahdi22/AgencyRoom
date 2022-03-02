import React from 'react';
import './decou.css'
import { BsWifi } from "react-icons/bs";
import { FaParking ,FaSwimmingPool} from "react-icons/fa";
import { MdOutlineWaves} from "react-icons/md";

const Decouvrir = () => {
  return <div >
<section className='section13' >
<div className='box'> 
<h1>SERVICES</h1>
</div>
</section>
<section className='section2'>

<div className='services'>
  <div className='boxes'>
<FaParking className='icones'/>
<h1>Parking</h1>

  </div>
</div>
{/* <-----> */}

{/* <-----> */}

<div className='services'>
  <div className='boxes'>
<MdOutlineWaves className='icones'/>
<h1>Plage privée</h1>
  </div>
</div>

<div className='services'>
  <div className='boxes'>
<FaSwimmingPool className='icones'/>
<h1>Piscine</h1>
  </div>
</div>

</section>
<section className='section3'>

<div className='boxes2'>
  <div className='bg'>
<div className='description'>
<h2> Bar lounge</h2> 

</div>
  </div>
</div>


<div className='boxes2'>
  <div className='bg1'>
<div className='description'>
<h2> Restaurants</h2> 

</div>
  </div>
</div>


<div className='boxes2'>
  <div className='bg2'>
<div className='description'>
<h2> Evenements </h2> 


</div>
  </div>
</div>
</section>
{/* online booking 
Events 
wifi
parking 
pisine
bar 
airport transport 
dining area*/}

  </div>;
};

export default Decouvrir ;
