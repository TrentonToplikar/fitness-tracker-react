import React, { useState } from "react";
import { loginAPI } from "../api/loginAPI";
import { Navigate } from "react-router-dom";
import { me } from "../api/authAPI.js";
import './styles/Register.css'

////////// this is the login form that lets you put your username and password. very secure \\\\\\\\\\
export const LoginForm = ({ setToken, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-container"> 
      <form
      className="register-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = await loginAPI(username, password);
          if (data.error) {
            alert(data.message)
        } else {
          alert(data.message)
      }
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.user.username);
          setToken(data.token);
          setUsername("")
          setPassword("");
        }}
      >
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
  );
};


export const Logout = (setToken) => {
  localStorage.clear();
  setToken();
};