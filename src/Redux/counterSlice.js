import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Counter",
    initialState: { count:0, history: [] },
    reducers: {
        increament: (state, action) => {
            console.log("incre", state);
            console.log("drea", action);
            state.count += action.payload;
            state.history.push(state.count);
            

        },
        decreament: (state) =>{
            state.count -= 1;
            state.history.push(state.count);
            
        },
        reset: (state) =>{
            state.count=0;
            state.history.fill();
        }
        
    }
});

console.log("counterSlice.action", counterSlice);

export const {increament, decreament, reset } = counterSlice.actions;
export default counterSlice.reducer;