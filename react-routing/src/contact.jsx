import { Outlet,Link } from "react-router"
import Phone from "./phone"
import Email from "./email"

export default function Contact(){

    return (
        <>
        <h1>Welcome to the Contact Page</h1>
        <Link to="Phone">Phone</Link>
        <Link to="Email">Email</Link>
        <Outlet/>
        </>
    )
}