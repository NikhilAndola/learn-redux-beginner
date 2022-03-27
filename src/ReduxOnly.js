import { createStore } from 'redux';

//ACTION Increment
const Increment = () => {
    // This function returns a object
    return {
      type : 'INCREMENT',
  
    }
  }
  
  const Decrement = () => {
    // This function returns a object
    return {
      type : 'DECREMENT',
  
    }
  }
  
  //INITIAL STATE
  let InitialState = 0;
  
  //REDUCER
  const counter = (state = 0, action ) => {
  
    switch(action.type){
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
  
  //STORE - Globalized State
  let store = createStore(counter)
  
  // Display it in the console
  store.subscribe(()=> console.log(store.getState())) 
  
  //DISPATCH
  store.dispatch(Increment());
  store.dispatch(Decrement());
  store.dispatch(Decrement());