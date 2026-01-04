import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "../components/head";
import Body from "../components/body";

const root = document.getElementById("root");

function GeneratePassword(){

    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

ReactDOM.createRoot(root).render(<GeneratePassword/>);