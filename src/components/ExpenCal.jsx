import React, { useState } from "react";

export default function ExpenCal(){

    const [count , setCount] = useState(0);

    const expensiveCalculations = () => {
        console.log("Calculation is Running...")
    
    let total = 0;

    for (let i =0; i < 1000000; i++){

        total+=i;
    }

    return total;
}

    return(
        <div>
            <button onClick={() => (setCount(count+1))}>Counting: {count}</button>
            <h1>{expensiveCalculations}</h1>
        </div>
    );
}