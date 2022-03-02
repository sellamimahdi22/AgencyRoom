import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getchambres } from '../../redux/Actions/chambAction';
import Chambrecard from './Chambrecard'
import  "./chambrelist.css"





const Chambreslist = () => {
   const { loading,chambres} = useSelector((state) => state.chambresreducer);
  //  console.log(chambres);
const dispatch =useDispatch()
 useEffect(() => {
   dispatch(getchambres());
   
 }, []);
 

 
  return <div  >


<section className='search'>
<div className='rech'>
  <h1>Rechercher</h1>
  <div className='dates'>

  <input type="date"/>
  <label>Arrivee</label>

    <input type="date"/>
  <label>depart</label>
  </div>
  <div className='reechbtn'>

  <button >Recherche</button>
  </div>
</div>
</section>



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

