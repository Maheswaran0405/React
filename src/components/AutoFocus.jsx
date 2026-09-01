import React, { useEffect, useRef } from "react";

function AutoFocus(){

    const inputRef= useRef(null);
    
    useEffect(() =>{
        handleFocus();
    },[]);

    const handleFocus= () =>{
        // console.log("InputRef",inputRef.current.focus( ))
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return(

        <div>
            <input ref={inputRef} type="text" placeholder="Enter Your Name"/>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default AutoFocus;