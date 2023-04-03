import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { LoginForm } from "./components/Login";
import { me } from "./api/authAPI.js";
import { PublicRoutines} from "./components/PublicRoutines";
import { PrivateRoutines } from "./components/MyRoutines";
import { PublicActivities } from "./components/PublicActivities";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
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
        <Route path="/login" element={<LoginForm setToken={setToken} setUser={setUser} />} />

        {/* // register */}
        <Route path="/register" element={<Register setToken={setToken} />} />

        {/* // profile */}
        <Route path="/profile" element={<Profile />} />

        {/* //(main)Routines(public) */}
        <Route path="/routines" element={<PublicRoutines publicRoutineList={publicRoutineList} setPublicRoutineList={setPublicRoutineList}/> } />

        {/* // my routines (private) */}
        <Route path="/myRoutines" element={<PrivateRoutines privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList} token ={token} user={user} /> }/>
       
        {/* Activities */}
        <Route path="/Login" element={<PublicActivities publicActivityList={publicActivityList} /> } />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App