import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
