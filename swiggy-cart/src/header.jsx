import { useSelector } from "react-redux"

export default function Header(){

    const count = useSelector((state) => state.slice1.count);
    const price = useSelector((state) => state.slice1.price)
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>

            <h1>Swiggy</h1>
            <h1>Cart({count})</h1>
            <h1>Price({price})</h1>
        </div>
        </>
    )
}