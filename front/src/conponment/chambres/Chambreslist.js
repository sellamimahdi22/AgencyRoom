import React,{useEffect} from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getchambres } from '../../redux/Actions/chambAction';
import Chambrecard from './Chambrecard'

const Chambreslist = () => {
   const { loading,chambres} = useSelector((state) => state.chambresReducer);
   console.log(chambres);
const dispatch =useDispatch()
 useEffect(() => {
   dispatch(getchambres());
   
 }, []);
 
  return <div>


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
        
        </div>


    }
     

export default Chambreslist;

