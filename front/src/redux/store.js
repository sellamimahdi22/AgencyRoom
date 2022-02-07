
import {applyMiddleware, compose, createStore} from 'redux';
import rootreducer from './reducers/rootreducers';
import thunk from "redux-thunk"

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store =createStore(rootreducer,compose(applyMiddleware(thunk),devTools))
  export default store