import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(){

    const[users,setUsers]=useState([]);
    
        
    const getUsers= async () => {
    try{
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        console.log("response",response)
        setUsers(response.data);
    }
    catch (err){
        console.log(err)
    }
};

useEffect(()=>{
    getUsers();
},[])
    

    return(
    <div>
        <ol>
            {users.map((val)=>(
                <li key={val.id}>
                    <strong>Name:</strong>{val.name}
                </li>
            ))}
        </ol>
    </div>
    )
}
export default Users;