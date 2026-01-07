import React from "react";
import ReactDOM from "react-dom/client"
import Counting from "./src/counting";
import stores from "./storeconfig";
import { Provider } from "react-redux";
import Adder from "./src/adder";

function App(){
    return (
        <Provider store={stores}>

        <Counting></Counting>
        <Adder></Adder>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)