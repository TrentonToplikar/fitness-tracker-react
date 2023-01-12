import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { me } from "./api/authAPI.js";
import { LoginForm } from "./components/Login";
import { RoutineForm } from "./components/RoutineForm";
import { PublicRoutines} from "./components/PublicRoutines";
import { Navbar } from "./components/NavBar";
import Home from "./components/Home";
// import { ActivityForm } from "./components/Activities";       ******THIS NEEDS TO BE COMMENTED BACK IN!

import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ routines, setRoutines ] = useState([])
  const [ myRoutines, setMyRoutines ] = useState([])
  const [publicRoutineList, setPublicRoutineList] = useState([]);
  // const [ activities, setActivites ] = useState([])      ******THIS NEEDS TO BE COMMENTED BACK IN!


  useEffect(() => {
    if (token) {
      const getMe = async () => {
        setUser(await me(token));
        setIsLoggedIn(!isLoggedIn);
      };
      getMe();
    }
  }, []);

  // console.log(`this is user: ${user.username} loggedIn?:`)

  // useEffect(() => {
  //   const getMe = async () => {
  //     const data = await fetchMe(token);
  //     setUser(data);
  //     console.log(data);
  //     console.log("user", user);
  //   };
  //   if (token) {
  //     getMe();
  //   }
  // }, [token]);
  
  

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
        <Route path="/MyRoutines" element={<RoutineForm myRoutines={myRoutines} setMyRoutines={setMyRoutines} token ={token} /> } />

        {/* Activities */}
        {/* <Route path="/Activities" element={<ActivityForm activities={activities} setActivities=[setActivities] token ={token} /> } /> */}
        {/* ******THIS NEEDS TO BE COMMENTED BACK IN!^^^^^^^^^^^^^^^^^^ */}
        

        {/* //Profile */}
        {/* <Route path="/Profile" element={<Profile} */}
      
      </Routes>
      
    </div>
  )
}

export default App


// routines={routines} setRoutines={setRoutines}
// setPublicRoutineList={setPublicRoutineList}