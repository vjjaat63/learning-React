import { useContext } from "react";
import globalContext from "./global";
export default function Grandchild(){

    const {count,setCount} = useContext(globalContext);
    console.log(globalContext);
    return (
        <>
        <h2>This is child of parent here : {count} </h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}