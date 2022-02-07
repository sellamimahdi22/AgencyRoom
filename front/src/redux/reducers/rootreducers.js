import { combineReducers } from "redux";
import userReducer from './userReducer';
import chambresreducer from "./chambReducer.";
const rootreducer=combineReducers({userReducer,
    chambresreducer
})
export default  rootreducer
