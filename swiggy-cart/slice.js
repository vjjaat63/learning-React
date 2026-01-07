import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
    name : "slice",
    initialState : {
        count : 0,
        price : 0,
    },
    reducers:{
        Increment : (state) => {state.count++},
        Decrement : (state) => {state.count--},
        IncPrice : (state,action) => {state.price += action.payload},
        DecPrice : (state,action) => {state.price -= action.payload},
    }
});


export const {Increment,Decrement,IncPrice,DecPrice} = slice1.actions;
export default slice1.reducer;