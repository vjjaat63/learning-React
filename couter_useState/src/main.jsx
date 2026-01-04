import React, { useState } from "react";
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

function Counter(){
    
    let [count,setcount] = useState(0);
    function Increase(){
        setcount(++count);
    }
    
    function Decrease(){
        if(count === 0){
            alert("can't go beyond 0")
            return ;
        }
        setcount(--count);
    }
    return (
        <div className="container">
            <h1>Count is : {count}</h1>
            <button id="inc" onClick={Increase}>Increment</button>
            <button id="dec" onClick={Decrease}>Decrement</button>
        </div>
    );
}

ReactDOM.createRoot(root).render(<Counter/>);