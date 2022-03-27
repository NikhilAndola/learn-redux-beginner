import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

// we have to pass a object which contains (all the reducers) to the combineReducers.
const allReducers = combineReducers({
    counter : counterReducer, 
    isLogged : loggedReducer
})

export default allReducers