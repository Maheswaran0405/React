import React, { useState } from "react";



function ReactForm(){

    const initialValues={
        FirstName:"",
        LastName:""
    }

    const[name,setName]=useState(initialValues);
    const handleChange=(e)=>{
        console.log(e.target.value)
        setName({...name,FirstName:e.target.value})
        
    }

    const handleChange1=(e)=>{
        console.log(e.target.value)
        setName({...name,LastName:e.target.value})

    }

    const handleSub=(e)=>{
        e.preventDefault();
        e.target.submit(); 
    }

    return(
        <div>
            <p>React Form</p>
            <form onSubmit={handleSub}>
                <label>First Name:</label><input onChange={handleChange} value={name.FirstName} required/>
                <label>Last Name:</label><input onChange={handleChange1} value={name.LastName} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactForm;