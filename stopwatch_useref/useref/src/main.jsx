import React, { useState,useRef } from "react";
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

function Counter(){
    
    const [count,setcount] = useState(0);
    const money = useRef(0);
    console.log(money)
    return (
        <>
        <div className="container">
            <h1>Count is : {count}</h1>
            <button id="inc" onClick={ () => setcount(count+1)}>Increment</button>
            <button id="dec" onClick={() => {
                if(count<1)
                    return alert("can't go beyond 0");
                setcount(count-1)}}>Decrement</button>
            
            <h1>Money is : {money.current}</h1>
            <button style={{color:"black"}} onClick={()=>{money.current++;console.log(money.current)}}>Increase</button>
            </div>
        </>
    );
}

ReactDOM.createRoot(root).render(<Counter/>);