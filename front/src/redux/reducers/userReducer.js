const { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } = require("../actiontype");

const init ={
    loading:false,
    errors:null,
    users:null,
    token:null
}
const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case REGISTER:
            case LOGIN:
            return{
                ...state,loading:true
            }
        case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
            return{
                ...state,loading:false,users:payload
            }
            case REGISTER_FAIL:
            case LOGIN_FAIL:    
            return{
                    ...state,loading:false,errors:payload
                }
        default:
            return state 
    }
}
export default userReducer