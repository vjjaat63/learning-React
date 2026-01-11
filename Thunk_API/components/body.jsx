import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { Fetchdata } from "./slicer";
import Poster from "./poster";


export default function Body(){

    const {loading,data,error} = useSelector((state) => state.slice1);
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(Fetchdata(20));
    },[]);

    // Displaying data

    if(loading){
        return <h1>Loading ...</h1>
    }
    if(error){
        return <h1>Something went wrong !</h1>
    }
    
    return (
        <>
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
