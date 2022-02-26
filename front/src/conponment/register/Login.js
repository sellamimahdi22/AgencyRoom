import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../redux/Actions/UserAction';
import './loigin.css'
const Login = () => {
  
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { loading, users } = useSelector((state) => state.userReducer );
  const dispatch = useDispatch();
  const handleident = (e) => {
  e.preventDefault();
  dispatch(loginUser({ Email, password }));
  };         
  return (
    <div className='bga'>
      {
  loading? <h1>loading...</h1> 
  :users? <Redirect to="/"> </Redirect>:
  <section className="connecter">
    <>
    <div className="login">
<h6> DÉJÀ CLIENT</h6>
<h2>Se connecter</h2>
<div className="forms">
<form>
    
    <div class="group">      
    <input
      type="text"
      
      
      value={Email}
      onChange={(e) => setEmail(e.target.value)}
      required/> 
      {/* <span class="highlight"></span> */}
      {/* <span class="bar"></span> */}
      <label>Email</label>
    </div>
      
    <div class="group">      
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required /> 
      
      <label>Mot de passe</label>
    </div>

    <button className='button0' type="submit"
    onClick={handleident}>
					Se Connecter
					
				</button>
    

        <Link to="/register" className='button10'>Inscrire</Link>
  
  </form>
</div>
    </div>
    </>

  
  </section>   
      }
  </div>
  )
}

export default Login
             

                
                
               
                   
                 






