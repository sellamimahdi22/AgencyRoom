import React, { useEffect } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import './Profile.css'
import {BsFillPersonXFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import useForceUpdate from 'use-force-update';
import { getchambres } from '../../redux/Actions/chambAction';
import { useDispatch, useSelector } from 'react-redux';
import Editchamb from '../chambres/Editchamb';
import Tables from './Tables';

const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user)
const Profile = () => {
  function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    forceUpdate();
  }, []);
  const { loading,chambres} = useSelector((state) => state.chambresreducer);
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getchambres());
    
  }, []);
  return (  
    <div>

   
  
  <div className='side-nav'>
           <span>
        
          
            <Link to="/" className="logo" >
          Chez Soi
        </Link>
           </span>
    
           <span className='log'> 
        <Link to="/"  onClick={logout}>
        <BsFillPersonXFill  className='logout'/>
        </Link>
        </span>
        </div>
        
        
        <main className='Myprofil'>
  
    <h2>Profil </h2>
 <table className='table'>
    <tbody >
    
       <tr>
         <td> Nom</td>
         <td width="1em"></td>
         <td> {user.firstname}</td>
       </tr> 
       <tr>
         <td> Prenom</td>
         <td width="1em"></td>

         <td> {user.Lastname}</td>
       </tr>
       <tr>
         <td> Email</td>
         <td width="1em"></td>

         <td> {user.Email}</td>
       </tr>
       <tr>
         <td> Numero telephone</td>
         <td width="1em"></td>

         <td> {user.phone}</td>
       </tr>
       <tr>
         <td> Pays</td>
         <td width="1em"></td>

         <td> {user.country}</td>
       </tr>
       
       
    </tbody>
 </table>

</main>
{user.isAdmin ? 
<div className='reservation'>
<h2>Chambres </h2>

{
      chambres && chambres.length>0 ?
      chambres.map(el=>
        <Tables chambre={el}/>)
        :null  }

 

  <Link to="/add" className='link22'>
  <button className='Addbtn2'>
  <BsFillPlusCircleFill/>
Ajouter chambres  </button>
  </Link>

</div>
:
<div>
  
</div>
}
                 
                 </div>
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 )
                }
                
                export default Profile