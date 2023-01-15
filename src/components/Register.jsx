import React, {useState} from "react";
import { registerUser } from "../api/authAPI.js";

const Register = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    {
    return <div>    
        <form onSubmit={async (e) =>{
            if (password.length > 7 && username.length > 7 ) {
            try {        
                e.preventDefault();
                const data = await registerUser(username, password);
            if (data.error) {
                alert(data.message)
            return
            } else {
                alert(data.message)
            }
            setToken(data.token);
            localStorage.setItem("token", data.token);
            console.log("this is token in register", data.token);
                
            } catch (error) {
            console.error(error)
            }     
            } else (alert("Invalid Registration - Username and Password needs at least 8 characters ")) 
        }}>
            <h2>Registration</h2>
            <input id="User" value={username} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input id="Pass" value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button id="submitten" type="submit">submit</button>
        </form>
    </div>
}}

    

export default Register;