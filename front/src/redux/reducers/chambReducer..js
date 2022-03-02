import { ADDCHAMBRES, DELETECHAMBRES, EDITCHAMBRES, GETCHAMBRES, GETCHAMBRES_FAIL, GETCHAMBRES_SUCCESS, GETONECHAMBRE } from "../actiontype";



const init ={
    loading:false,
    errors:null,
    chambres:null,
}
const chambresreducer=(state=init,{type,payload})=>{
    switch (type) {
        case GETCHAMBRES:
            
            return{
                ...state,loading:true
            }
        case GETCHAMBRES_SUCCESS:
            return{
                ...state,loading:false,chambres:payload
            }    
            case GETCHAMBRES_FAIL:
                return{
                    ...state,loading:false,errors:[...state.errors,payload],
                }
    // case GETONECHAMBRE:
    //     return{
    //         ...state,
    //     }
        case ADDCHAMBRES:
            return{
                ...state,chambres:[...state.chambres,payload]
            }
        case DELETECHAMBRES:
            return{
                ...state,chambres:state.chambres.filter(el=>el._id!==payload)
            }    
        case EDITCHAMBRES:    
        return{
            ...state,chambres:state.chambres.map((el)=>(el._id===payload._id?payload:el))
        }
        default:
            return state;
    }
}
export default chambresreducer;