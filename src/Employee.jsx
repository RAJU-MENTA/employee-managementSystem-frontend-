import {useState} from 'react';
function Employee(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
   
   
return (
    <>
      <h1>counting applications</h1>
      <button onClick={increment}>inc</button>
      <button onClick={()=>{setCount(count-1)}}>dec</button>
      <button onClick={()=>{setCount(0)}}> reset</button>
      <h2>Count:{count}</h2>

    </>
);
}
export default Employee