import React, { useEffect, useRef, useState } from "react";

function RenderCount(){

    // const[rendercount,setRenderCount] = useState(0);

    const rendercount = useRef(0);
    console.log(rendercount)

    useEffect(() =>{
        console.log("Effect Running...")
        rendercount.current = rendercount.current+1
    })

    return(
        <div>
            <h1>RederCount:{rendercount.current}</h1>

        </div>
    )
}

export default RenderCount; 