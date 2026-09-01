import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function About(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
    return(
        <div>
            <Outlet />
            <h1>About</h1>
            <h1>{location.state.name}</h1>
            <h1>{location.state.age}</h1>
            <button onClick={()=>useNavigate("/about")}>Click</button>
        </div>
        
        
    )
}

export default About;