import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, toggleLogin } from "./actions";
import { useEffect } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

// useEffect(()=> {
//   if(counter === 20) dispatch(toggleLogin())
// }, [counter])
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement()) }>-</button>

      <button onClick={() => dispatch(toggleLogin())} style={{display:"block", margin: "auto"}}>Toggle logged in </button>

      {isLogged && <h3>Valuable information that you shouldn't see</h3>}
    </div>
  );
}

export default App;
