import { useEffect,useState } from "react";
export default function Count(){
    const [count,setCount]=useState(0)
    function handleClick(){
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        console.log("hello")
},[count])
return(
    <div>
        <button onClick={handleClick}>add</button>
        <h1>{count}</h1>
    </div>
)
}