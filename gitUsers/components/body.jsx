import { useEffect, useState } from "react";

function Body(){
    const [profile,setProfile] = useState([]);
    const [nums,setNums] = useState("");
    const [input,setInput] = useState(15);
    async function getUsers(){
        const since = Math.floor(Math.random()*100000000 + 1);
        const response = await fetch(`https://api.github.com/users?since=${since}&per_page=${input}`);
        const data = await response.json();
        setProfile(data);
    }
    
    useEffect(()=>{
        getUsers();
    },[input]);

    return(
        <>
        {/* <input type="number" defaultValue={nums} placeholder="Enter number of profiles" onChange={e=> setInput(e.target.value)}/> */}
        <input type="number" defaultValue={nums} placeholder="Enter number of profiles" onChange={e=> setNums(e.target.value)}/>
        <button onClick={ () => setInput(nums)}> Get </button>
        <div className="profile">

            {profile.map( (value) =>  (
                <div className="card" key={value.id}>
                    <img src={value.avatar_url} alt="" />
                    <h1 className="user">{value.login}</h1 >
                    <a href={value.html_url}>See Profile</a>
                </div>
            ))}

        </div>
     
        </>
    )
}

export default Body;