import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { fetchMe } from "./api/auth";
import { LoginForm } from "./components/Login";
import { RoutineForm } from "./components/RoutineForm";
// import {  } from "./components/PublicRoutines";
import { Navbar } from "./components/NavBar";


import './App.css'

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
      <Navbar setToken={setToken} user={user} />
      <Routes>

        //Home
        {/* <Route path="/" /> */}

        (optional. Could be alternatively created as a modal or part of the header/footer)
        //Login
        <Route path="/Login" element={<LoginForm setToken={setToken} setUser={setUser} />} />

        // register
        <Route path="/Register" element={<Register setToken={setToken} />} />

        //(main)Routines(public)
        {/* <Route path="/Routines" element={<____ token ={token} /> } /> */}

        // my routines (private)
        <Route path="/MyRoutines" element={<RoutineForm token ={token} /> } />

        //Activities
        {/* <Route path="/Activities" element={<ActivityForm token ={token} /> } /> */}
     
        

        //Profile
        {/* <Route path="/Profile" element={<Profile} */}



        //EditRoutine
        //EditActivityId - Anyone can update an activity (yes, this could lead to long term problems a la wikipedia)
        //EditRoutineId - Update a routine, notably change public/private, the name, or the goal
        //EditRoutineActivityId - Update the count or duration on the routine activity
     
      
      </Routes>
      
    </div>
  )
}

export default App
