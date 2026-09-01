import React, { useContext } from "react";
import {UserContext} from "./Context/UserContext";

function CheckOut(){

    const value = useContext(UserContext);
    console.log(value)
    return(
        <div>
            <h1>Welcome {value.user}</h1>
            <button onClick={() =>value.setUser("")}>LogOut</button>
        </div>
    )
}

export default CheckOut;