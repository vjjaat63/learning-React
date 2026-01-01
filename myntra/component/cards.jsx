function Card(props){
    return (
        <>
            <div className="card" style={{border:"2px solid black" , borderRadius:"15px", padding:"5px", width:"150px",backgroundColor:"#adc3bdff"}}>
                <img src={props.link} width="150px" height="180px" style={{borderRadius:"12px"}} alt="" />
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
                    <h3 style={{margin:"3px"}}> {props.item}</h3>
                    <h3 style={{margin:"3px"}}>{props.offer}</h3>
                    <h3 style={{margin:"3px",color:"green",fontWeight:"1000"}}>Price : {props.price}</h3>
                    <h2 style={{color:"white",backgroundColor:"blue",padding:"4px",borderRadius:"5px"  , margin:"3px"}}>Shop Now</h2>
                </div>
            </div>
        </>
    )
}
export default Card;