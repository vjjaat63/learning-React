import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

const root = document.getElementById("root");

function GeneratePassword(){

    const [Password,setPassword] = useState("*******");
    const [length,setLength] = useState(8);
    const [numberChanged,setNumberChanges] = useState(false);
    const [characterChanged,setCharacterChanges] = useState(false);

    console.log(length)
    function generate(){
        console.log("rend")
        let str =  "abcdefghijklmnopqrsABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str += "0123456789"
        if(characterChanged)
            str += "!@#$%^&*()_[{}]"

        let pass = "";
        for(let i = 0;i<length;i++){
            let char = str[Math.floor(Math.random()*str.length)];
            pass += char;
        }
        setPassword(pass);
    }

    useEffect(()=>{
        generate();
    },[length,characterChanged,numberChanged]);
   
    return (
        <>
            <h1>Password Generator</h1>
            <h1> {Password}</h1>

            <div className="opt">
                <input type="range" min={4} max={50} value={length} onChange={(e)=>setLength(Number(e.target.value))}/>
                
                <label htmlFor="">Length({length})</label>

                <input type="checkbox" checked = {numberChanged} onChange={()=>setNumberChanges(!numberChanged)}/>
                <label htmlFor="">Number</label>
                <input type="checkbox" checked = {characterChanged} onChange={()=>setCharacterChanges(!characterChanged)}/>
                <label htmlFor="">Character</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(root).render(<GeneratePassword/>);