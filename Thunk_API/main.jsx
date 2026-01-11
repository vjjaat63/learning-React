import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import stores from "./configstore"
import { Provider } from "react-redux";
import Body from "./components/body";

function App(){
    return(
        <Provider store = {stores}>
        <Body></Body>

        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)