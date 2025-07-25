import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let number = Math.floor(Math.random()*100 + 1);
  // let value = 1;
  
  const [value,setValue] = useState(number);

  function increase(){
    
    // console.log("increasing");
    // let value = parseInt(document.getElementById("val").innerText);
    // value++;
    // document.getElementById("val").innerText = value;
  
  
      if(value === 100){
      alert("Can't go above 100");
      return;
    }
    setValue(value => value+1);
  }
  
  function decrease(){
   
    // let value = parseInt(document.getElementById("val").innerText);
    // if(value==0){
    //   alert("can't go below 0")
    //   return ;
    // }
    //   value--;
    // document.getElementById("val").innerText = value;
    
    if(value === 0){
      alert("Can't go below 0");
      return;
    }
    setValue(value => value-1);
    
  }


  return (
   <>
   <h1>Hello Counter</h1>
   <div>Current Value : <span id='val'>{value}</span></div>
   <button id='inc' onClick={increase}>Increment</button>
   <br />

   <button id='dec' onClick={decrease}> Decrement</button>
   </>
  )
}

export default App
