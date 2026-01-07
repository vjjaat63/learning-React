import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { CustomIncrement } from "../slices/slice1";

export default function Adder(){
    const [count,setCount] = useState("");
    const dispatch = useDispatch();
    console.log(count);
    return (
        <>
            <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <button onClick={()=>{
                    dispatch(CustomIncrement(Number(count)));
                    setCount("");
                }
            }>Add</button>
        </>
    )
}