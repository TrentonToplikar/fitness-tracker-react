import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { me } from "./api/authAPI.js";
import { LoginForm } from "./components/Login";
import { PublicRoutines} from "./components/PublicRoutines";
import { PrivateRoutines } from "./components/MyRoutines";
import { Navbar } from "./components/NavBar";
import Home from "./components/Home";
import { PublicActivities } from "./components/PublicActivities";

import './App.css'

function App() {
  const [ token, setToken ] = useState(localStorage.getItem("token"));
  const [ user, setUser ] = useState("");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ publicRoutineList, setPublicRoutineList ] = useState([]);
  const [ privateRoutineList, setPrivateRoutineList ] = useState([]);
  const [ publicActivityList, setPublicActivityList ] = useState([]);


  useEffect(() => {
    if (token) {
      const getMe = async () => {
        const username = await me();
        localStorage.setItem("user", username)
        console.log("THIS IS getMe", username)
        setUser(username);
        setIsLoggedIn(!isLoggedIn);
      };
      getMe();
    }
  }, []);  
  
  return (
    <div className="App">
      <Navbar setToken={setToken} user={user} />
      <Routes>

        {/* Home */}
        <Route path="/" element ={<Home  />} />

        {/* Login  */}
        <Route path="/Login" element={<LoginForm setToken={setToken} setUser={setUser} />} />

        {/* // register */}
        <Route path="/Register" element={<Register setToken={setToken} />} />

        {/* //(main)Routines(public) */}
        <Route path="/Routines" element={<PublicRoutines publicRoutineList={publicRoutineList} setPublicRoutineList={setPublicRoutineList}/> } />

        {/* // my routines (private) */}
        <Route path="/MyRoutines" element={<PrivateRoutines privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList} token ={token} user={user} /> }/>
       
        {/* Activities */}
        <Route path="/Activities" element={<PublicActivities publicActivityList={publicActivityList} /> } />
      
      </Routes>
    </div>
  )
}

export default App