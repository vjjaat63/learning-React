import { configureStore } from "@reduxjs/toolkit";
import react1slicer from "./slices/slice1";

const stores = configureStore({
    reducer : {
        slice1 : react1slicer,
        // slice2 : react2slicer,
        // slice3 : react3slicer,
    }
});


export default stores;