import { Increment,Decrement,IncPrice,DecPrice} from "../slice";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { useEffect } from "react";

export default function Card(props){

    const [inCart,setCart] = useState(false);
    const food = props.food;
    const dispatch = useDispatch();

    function Handle(){
        if(inCart){
            setCart(false);
            dispatch(Decrement());
            dispatch(DecPrice(food.price));
        }
        else{
            setCart(true);
            dispatch(Increment(food.price));
            dispatch(IncPrice(food.price));
        }
    }
    return (
        <div style={{border:"1px solid white",padding:"3px",width:"200px",height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"none"}}>
        
            <img width="180px" height="190px" src={food.image} alt="food image" />
            <h1>{food.name}</h1>
            <h2>{food.price}</h2>
            <button onClick={()=>Handle()}>{ (inCart)?"Remove":"Add"}</button>
        </div>
    )
}