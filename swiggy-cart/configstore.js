import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./slice";


const store = configureStore({
    reducer : {
        slice1 : slice1,
    }
});

export default store;