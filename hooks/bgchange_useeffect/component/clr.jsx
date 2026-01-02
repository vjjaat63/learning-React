import React,{useState,useEffect}  from "react";


export default function clrchange(){
    const [color,setColor] = useState("#212121");
    useEffect(()=>{
        console.log(color)
        document.body.style.backgroundColor = color;
    },[color]);

    return (
        <div className="container">
            <button id="violet" onClick={ ()=> setColor("violet")}>Violet</button>
            <button id="indigo" onClick={ ()=>setColor("indigo")}>Indigo</button>
            <button id="blue" onClick={ () => setColor("blue")}> Blue</button>
            <button id="green" onClick={() => setColor("green")}>Green</button>
            <button id="yellow" onClick={() => setColor("yellow")}>Yellow</button>
            <button id="orange" onClick={() => setColor("orange")}>Orange</button>
            <button id="red" onClick={() => setColor("red")}>Red</button>
        </div>
    );
}