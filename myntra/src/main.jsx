import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../component/header";
import Card from "../component/cards";
import products from "../utils/data";

const root = document.getElementById("root");



function App(){
    return (
        <>
    
        <Header/>

        <div className="mid">

            {products.map((item,index)=><Card key={index} item={item.name} offer = {item.offer} price = {item.price} link = {item.image}/>)}
            
        </div>  
        
        </>
    )
}

const Root = ReactDOM.createRoot(root);
Root.render(<App/>);