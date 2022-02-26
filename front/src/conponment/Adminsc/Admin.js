import React, { useEffect } from 'react'
import '../register/Profile.css'
import {BsFillPersonXFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getchambres } from '../../redux/Actions/chambAction';

const user = JSON.parse(localStorage.getItem("currentUser"));
const Admin = () => {
  function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
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
        <Link to="/" onClick={logout}>
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
       <tr>
         <td> admin</td>
         <td width="1em"></td>

         {/* <td>{user.isAdmin ? "Yes" : "No"}</td> */}
       </tr>
    </tbody>
 </table>

</main>
<div className='reservation'>
<h2>Chambres </h2>
<table className='table'>

{chambres.map(el=>
   <tr>
   <th> {el.title} </th>
   <td> <button> edit </button></td>
   <td> <button> delete </button></td>
   </tr>
  )}
  </table>
 
</div>
<div className='add'>
  <Link to="/add">
  <button>
    Add room
  </button>
  </Link>
</div>
                </div>
               
           
              


	


    
  )
}

export default Admin