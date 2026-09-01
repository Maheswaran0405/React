import { useDispatch, useSelector } from "react-redux";
import {increament, decreament, reset} from "../Redux/counterSlice";



function Counter1(){
    const count = useSelector((state) => state.count);
    const history = useSelector((state) => state.history)
    console.log("Count", count);
    const dispatch = useDispatch();


    return(
        <div>
            <h1>{count}</h1>

            <button onClick={() => dispatch(increament(1))}>+</button>

            <button onClick={() => dispatch(decreament( ))}>-</button>

            <button onClick={() => dispatch(reset())}>Reset</button>

            <p>History: {history}</p>
            
            
        </div>
    )
}

export default Counter1;