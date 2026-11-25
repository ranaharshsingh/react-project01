import { useContext } from "react";
import { Usercontext } from "./UserContext";

function Avatar(){
    const userr=useContext(Usercontext)
    return <h1>welcome{user}</h1>
}
export default Avatar;