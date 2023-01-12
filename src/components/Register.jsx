import React, {useState} from "react";
import { registerUser } from "../api/authAPI.js";

//if token, do this
// if no token, do this...
const Register = ({setToken}) => {
    // hit submit - run register user which will pull out a token..
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    if (username.length > 2 && password.length > 2)
    {
    console.log(`username length is ${username.length} and password length is ${password.length}`);
    }
    {
    return <div>    
            <form onSubmit={async (e) =>{
        if (password.length > 2 && username.length > 2) {

        try {        
        e.preventDefault();
        //changed the response to token as it was changed form the auth.js 
        const data = await registerUser(username, password);
        // setting token into global storage so it can be pulled throughout the app
        setToken(data.token);
        //get this setToken function and update the state for the refined token
        localStorage.setItem("token", data.token);
        //go back and make the the local to be the storage
    console.log("this is token in register", data.token);
                
} catch (error) {
        console.error(error)
    }
}
    }}>
    <h2>Registration</h2>
    <input id="User" value={username} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
    <input id="Pass" value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
    <button id="submitten" type="submit">submit</button>

        

        </form>
        
    </div>
}}

    

export default Register;