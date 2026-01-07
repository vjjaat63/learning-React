import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./header";
import Cards from "./cards";
import stores from "../configstore";
import { Provider } from "react-redux";

function App(){

    return(
        <Provider store = {stores}>

        <Header></Header>
        <Cards></Cards>

        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

