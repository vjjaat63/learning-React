import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/header";
import Card from "../component/cards";
import products from "../utils/data";
import { useState } from "react";

const root = document.getElementById("root");



function App(){

    let [arr,setArr] = useState(products);

    function sortarray(){
        arr.sort((a,b)=>a.price - b.price);
        const brr = [...arr];
        setArr(brr);
    }
    return (
        <>
    
        <Header/>
        
        <button onClick={sortarray}> Sort by Price </button>
        <div className="mid">

            {arr.map((item,index)=><Card key={index} item={item.name} offer = {item.offer} price = {item.price} link = {item.image}/>)}
            
        </div>  
        
        </>
    )
}

const Root = ReactDOM.createRoot(root);
Root.render(<App/>);