import { NavLink } from "react-router-dom"
export default function Home(){
    return(
        <div>
            <NavLink to={"/"}>Signup</NavLink>
            <br />
            <NavLink to={"/signin"}>SignIN to login</NavLink>
        </div>
    )
}