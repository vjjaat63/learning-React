import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/counting";
import stores from "./storeconfig";
import { Provider } from "react-redux";

function App(){
    return (
        <Provider store={stores}>

        <Counting></Counting>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)