import axios from 'axios'
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actiontype"


export const registerUSer =(newuser)=> async(dispatch)=>{
    dispatch({
        type:REGISTER,
    })
   try {
    const {data}=await axios.post('/user/register',newuser)
    dispatch({
        type:REGISTER_SUCCESS,
        payload:data,
    })
   } catch (error) {
       dispatch({
           type:REGISTER_FAIL,
           payload:error.response.data,
       })
   }
}

export const loginUser=(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
        const res= await axios.post('/user/login',user);
        localStorage.setItem('token',res.data.token)
        console.log(res.data)
        const {firstname,Lastname,Email,phone,country,isAdmin}=res.data
        const currentUser = {
            
            firstname,
            Lastname,
            Email,
            phone,
            country,
            isAdmin,
        }
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
        console.log(res)
     dispatch({
         type:LOGIN_SUCCESS,
         payload:res.data,
     })
    } catch (error) {
        dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data
        })
    }
}