import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({
    name : "slice",
    initialState : {count : 0},
    reducers : {
        Increment : (state) => { state.count = state.count + 1 },
        Decrement : (state) => { state.count = state.count - 1 },
        Reset : (state) => { state.count = 0 },
        CustomIncrement : (state,action) => { state.count = state.count + action.payload}
    }
});


export const {Increment,Decrement,Reset,CustomIncrement} = reactslicer.actions;

export default reactslicer.reducer;