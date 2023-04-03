import React, {useState} from "react";
import { registerUser } from "../api/authAPI.js";
import './styles/Register.css'

const Register = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    {
    return (
        <div className="register-container">    
            <h2>Registration</h2>
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
                                    
                } catch (error) {
                console.error(error)
                }     
                } else (alert("Invalid Registration - Username and Password needs at least 8 characters ")) 
            }}>
                <div className="login-container">
                    <div className="login-form-container">
                        <h1 className="sign-in">Sign In</h1>
                            <input className="form-input" id="User" value={username} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
                            <input className="form-input" id="Pass" value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
                            <button className="login-button">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}}

    

export default Register;