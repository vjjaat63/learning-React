import { configureStore } from "@reduxjs/toolkit";
import slicer1 from "./components/slicer"


const stores = configureStore({
    reducer : { 
        slice1 : slicer1,
    }
});

export default stores;