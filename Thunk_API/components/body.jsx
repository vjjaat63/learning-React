import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { Fetchdata } from "./slicer";
import Poster from "./poster";


export default function Body(){
    const [count,setCount] = useState(0);
    // const [input,setInput] = useState(0);
    const {loading,data,error} = useSelector((state) => state.slice1);
    const dispatch = useDispatch();

    // useEffect( ()=>{
    //     if(count>0)
    //         dispatch(Fetchdata(count));
    // },[count]);

    const Handle = ()=>{
        if(count>0)
            dispatch(Fetchdata(count));
    }

    console.log(count);
    // Displaying data

    if(loading){
        return <h1>Loading ...</h1>
    }
    if(error){
        return <h1>Something went wrong !</h1>
    }
    
    return (
        <>
        <input type="text" placeholder="Input number of coins needed" onChange={(e)=>setCount(Number(e.target.value))}/>
        <button onClick = {Handle}> Submit</button>

        <div className="coins">
            {
            data.map(coin =>  {
                return <Poster key = {coin.id} coin = {coin}></Poster>
            })
            }
        </div>
        </>
    )
    
}
