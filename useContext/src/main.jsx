import React, { useState} from "react";
import ReactDOM from "react-dom/client"
import Child from "./child"
import globalContext from "./global";


function App(){

    const [count,setCount] = useState(0);


return(
    <>
        <globalContext.Provider value={{count,setCount}}>

        <h1>Count is : {count}</h1>
        <Child></Child>
        </globalContext.Provider>
    </>
)
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)