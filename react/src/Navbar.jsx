import Home from "./Home"
export default function Navbar(props){
    return(
        <>
        <h1>Hello welcome{props.username} </h1>
          <h2>{props.email}</h2>  
          <Home name=props.Akshatha/>
        </>
    )
}