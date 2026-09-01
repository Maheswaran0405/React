

import React from "react";
import useCounter from "./customhook/CounterHook";

// import { decreament, increament } from "../Redux/counterSlice";



function Home(){
    
    const { count, increament, decreament }= useCounter();
    console.log("sakthi", count, increament, decreament)
    
    return(
        <>

        <h1>Count {count}</h1>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>


        </>
    )
}

export default Home

export function PlayGround(){
    return(
        <div>PlayGround</div>
    )
}

export function Greeting(props){
    const name=props.name

    return(
        <h1>{name}</h1>
    )
}

export function GetValue({name,age=25}){
    return(
        <h1>{name}-{age}</h1>
    )
}

export function Condition({name,age}){
    return(
        <div>
        <h1>{name}-{age ? age : 0}</h1>
        {age ? <p>I am Qualified</p> : <></>}
        </div>
    )
}

export function ButtonNew({onClick,name}){
    return(
        <button onClick={()=>onClick(name)}>Click</button>
    )
}

