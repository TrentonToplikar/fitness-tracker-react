import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { LoginForm } from "./components/Login";

import './App.css'

// import { Routes, Route, Link} from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
      console.log(data);
      console.log("user", user);
    };
    if (token) {
      getMe();
    }
  }, [token]);
  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/Login"
          element={<LoginForm setToken={setToken} setUser={setUser} />}
        />
        <Route path="/Register" element={<Register setToken={setToken} />} />

      </Routes>
      
    </div>
  )
}

export default App
