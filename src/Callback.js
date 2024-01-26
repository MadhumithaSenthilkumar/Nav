import React ,{useState, useCallback} from 'react';

const  Callbacks=()=>{
    //State using useState
  const [count,setCount]= useState(0);
  //function that we want to memoize
 const handleClick=useCallback(() => {
    //DO something with the count
    console.log (`Button clicked.Count:${count}`);
},[count]);

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count:{count}</p>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  );
};

export default Callbacks;