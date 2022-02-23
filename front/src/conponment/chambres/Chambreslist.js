import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getchambres } from '../../redux/Actions/chambAction';
import Chambrecard from './Chambrecard'
import chambreliste from "./chambrelist.css"





const Chambreslist = () => {
   const { loading,chambres} = useSelector((state) => state.chambresreducer);
   console.log(chambres);
const dispatch =useDispatch()
 useEffect(() => {
   dispatch(getchambres());
   
 }, []);
 

 
  return <div className='list' >


<section className='search'>
<div className='rech'>
  <h1>Rechercher</h1>
</div>
</section>
{/* <section className='ava'> */}
<div className='ava'>

</div>
{/* </section> */}


<section className='cards'>
  


{
    loading?<h3> loading ...</h3>
    :
    chambres && chambres.length>0 ?
    <>
    {
      
         chambres.map(el=>
          <Chambrecard chambre={el}/>)
    }
    </>
    : <p> nothing</p>
}
</section>
        </div>


    }
     

export default Chambreslist;

