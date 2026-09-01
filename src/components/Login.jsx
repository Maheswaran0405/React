import React, { useContext, useState } from "react";
import {UserContext} from "./Context/UserContext";

function Login(){

    const value = useContext(UserContext)
    console.log("value",value);

    const [name, setName] = useState("");
    console.log("Name",name)

    return(
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button variant= "outlined"
            onClick={() =>{
                value.setUser(name)
            }}
            >Login</button>
        </div>
    )
}

export default Login;