import React, { useCallback, useMemo, useState ,useRef, useReducer} from "react";
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

function Stopwatch(){
    
    const [time,setTime] = useState(0);
    const id = useRef("");
    function start(){
        if(id.current === ""){

            id.current = setInterval(()=>{
                setTime((curr)=>curr+1);
            },1000);
        }
    }
    function stop(){
        clearInterval(id.current);
        id.current = "";
    }
    function reset(){
        setTime(0);
        clearInterval(id.current);
        id.current = "";
    }
    
    return (
        <>
        <div className="container">
            <h1>Time is : {time}</h1>
            
            <button id="start" onClick={start} >Start</button>
            <button id="stop" onClick={stop}>Stop</button> 
            <button id="reset" onClick={reset}>Reset</button> 
  
        </div>
        </>
    );
}

ReactDOM.createRoot(root).render(<Stopwatch/>);