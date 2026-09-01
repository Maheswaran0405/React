import { useState } from "react";

function Counter({count,setCount}){
    
        const [val, setVal]= useState(0);

    const increament = () => {
        setCount((pre) => pre + val)
    };

    const decreament = () => {
        setCount(count - val)
    };

    const IncreaseVal=() =>{
        setVal((pre) => pre+1)
    };

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => increament()}>Increase</button>
            <button onClick={() => decreament()}>Decrease: </button>
            <h2>Increase: {val}</h2>
            <button onClick={IncreaseVal}>IncreaseVal</button>
        </div>
    )
}

export default Counter;