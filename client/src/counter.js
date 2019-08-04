import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "./actions/index";

function Counter() {
  const searchSelector = useSelector(state => state.search);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {searchSelector}</h1>
      <button onClick={() => dispatch(search())}>+</button>
    </div>
  );
}

export default Counter;
