import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Clr from "../component/clr"
const root = document.getElementById("root");

function Counter(){
    const [count,setCount] = useState(0);
    console.log(count)

    return (
        <>
        <div>
            <h1>count is : {count}</h1>
            <button style={{color:"black"}} onClick={()=>setCount(count+1)}>Increase</button>
        </div>
            <Clr></Clr>
        </>
    )
}

ReactDOM.createRoot(root).render(<Counter/>);