import React, { useState } from "react";
import { loginAPI } from "../api/loginAPI";
import { me } from "../api/authAPI.js";

////////// this is the login form that lets you put your username and password. very secure \\\\\\\\\\
export const LoginForm = ({ setToken, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
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
      }}
    >
      <h2> ENTER LOGIN HERE PLEASE</h2>
      <label htmlFor="username">Username: </label>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password">Password: </label>
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};


export const Logout = (setToken) => {
  localStorage.clear();
  setToken();
};