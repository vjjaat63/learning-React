import { useDispatch, useSelector } from "react-redux"
import { Increment,Decrement,Reset } from "../slices/slice1";
export default function Counting(){

    const data = useSelector((state)=>state.slice1.count);
    const dispatch = useDispatch();
    return (
        <>

            <h1>Counter is : {data}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        
        </>
    )
}