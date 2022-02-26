import axios from "axios";

import { ADDCHAMBRES, DELETECHAMBRES, EDITCHAMBRES, GETCHAMBRES ,GETCHAMBRES_FAIL,GETCHAMBRES_SUCCESS,GETONECHAMBRE} from "../actiontype";




export const getchambres=()=>async(dispatch)=>{
    dispatch({
        type:GETCHAMBRES,
    })
try {
    const {data} =await axios.get("/chambres/get-chambre")
    // console.log(data);
    dispatch({
        type:GETCHAMBRES_SUCCESS,
        payload:data,
    })
} catch (error) {
    dispatch({
        type:GETCHAMBRES_FAIL,
        payload:error.response.data,
    })
}
}

export const getone=()=>async(dispatch)=>{
    try {
        const res =await axios.get("/getonechambre")
        dispatch({
            type:GETONECHAMBRE,
            payload:res.data,
        })
    } catch (error) {
        alert('get one error')
    }
}
export const addchambre=(newchambre)=>async(dispatch)=>{
    try {
        const res =await axios.post("/chambres/add-chambre",newchambre)
        dispatch({

            type: ADDCHAMBRES,
            payload:res.data,
        })
    } catch (error) {
        // alert("add error")
  console.log(error.response)      
        
}}

export const editchambre =(editedchambre)=>async(dispatch)=>{
    try {
        const res = await axios.put(`/chambres/edit-chambre/:id`,editedchambre)
        dispatch({
            type:EDITCHAMBRES,
            payload:res.data,
        })
    } catch (error) {
        // alert("edit error")
        // console.log(error.response.data)
    }
}

export const deletechambre=(id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/delete/${id}`)
        dispatch({
            type:DELETECHAMBRES,
            payload:res.data,
        })
    } catch (error) {
        alert("delete error")
    }
}