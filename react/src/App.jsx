import axios from "axios";
import { useState }from "react";
export default function App(){
   const [users,setUsers]=useState([]);
    async function handleClick(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data);
        
    }
    return(
        <div>
            <button onClick={handleClick}>click here</button>
            {users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            )
            )}
            
        </div>
    )
}