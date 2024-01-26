import React from 'react'
import { useState } from 'react'
import "./Counter.css";
const Counter =()=>{
  const [count,setCount]=useState(0);

  const incrementCount=()=>{
    setCount(count+1);
  };

  const decrementCount=()=>{
    setCount(count-1);
  };
  
  const resetCount=()=>{
    setCount(0);
  };

 
  return (
    <div>
     <div class="container">
      <div class="container-box">
        <h1>Counter:{count}</h1>
         <div class="button-Container">
         <button onClick={incrementCount}>Increment</button>
         <button onClick={decrementCount}>Decrement</button>
         <button onClick={resetCount}>Reset</button>
         </div>
      </div>
     </div>
    </div>
  )
}
export default Counter