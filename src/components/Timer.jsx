import React, { useEffect, useState } from "react";

function Timer(){

    const[count, setCount] = useState(0);

    useEffect(() =>{
    
        console.log("Effect running.....")
        const interval = setInterval(() => {
            setCount((prev) => prev+1)
        }, 1000);

        return() =>{

            console.log("Working.....")
            clearInterval(interval);
        }

        
    },[]);

    return(
        <div>
            <button>Show/Hide Timer</button>
            <h2>Count: {count}</h2>
            
        </div>
    )
}

export default Timer;