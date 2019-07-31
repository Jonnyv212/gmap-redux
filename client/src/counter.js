import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions/index';


function Counter(){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (<div>
      <h1>Counter {counter}
      </h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      </div>)
  }

export default Counter