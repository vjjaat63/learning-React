import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./src/home"
import Contact from "./src/contact";
import About from "./src/about";
import Email from "./src/email";
import Phone from "./src/phone";
import Contact0 from "./src/contact0"
function App(){
    return (
        <>
        <BrowserRouter>
        <nav>
            <button>
                <Link to="/"> Home </Link>
            </button>
            <button>
            <Link to="/Contact"> Contact </Link>
            </button>
            <button>
            <Link to="/About"> About </Link>
            </button>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}>
            <Route index element={<Contact0/>}></Route>
            <Route path="Phone" element={<Phone/>}></Route>
            <Route path="Email" element={<Email/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)