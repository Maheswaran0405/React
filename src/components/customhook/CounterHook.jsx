import { useState } from "react";

function useCounter(){

    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count+1);
    };

    const decreament = () => {
        setCount(count-1);
    };

    return(
        count,
        increament,
        decreament
    )
}

export default useCounter;