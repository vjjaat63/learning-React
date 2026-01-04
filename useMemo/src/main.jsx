import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

function Counter(){
    
    const [count,setcount] = useState(0);
    const [sum,setSum] = useState("");
    

    const fibo = useCallback((n)=>{

        // yes i know the iterative approach very well but that's not the point here
        if(n<=1)
            return 1;
        return fibo(n-1) + fibo(n-2);
    },[])

    let result = useMemo(()=>{
        console.log("usememo running")
        return fibo(sum);
    },[sum])
    if(sum === "")
        result = "";
    
    return (
        <>
        <div className="container">
            <h1>Count is : {count}</h1>
            <button id="inc" onClick={ () => setcount(count+1)}>Increment</button>
            <button id="dec" onClick={() => {
                if(count<1)
                    return alert("can't go beyond 0");
                setcount(count-1)}}>Decrement</button>
        <div className="fib">
            <h2>Fibonacci Number is : {result} </h2>
            <input type="number" value={sum} onChange={(e)=> setSum(e.target.value)}/>
        </div>
        </div>
        </>
    );
}

ReactDOM.createRoot(root).render(<Counter/>);