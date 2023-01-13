import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { me } from "./api/authAPI.js";
import { LoginForm } from "./components/Login";
import { RoutineForm } from "./components/RoutineForm";
import { PublicRoutines} from "./components/PublicRoutines";
import { PrivateRoutines } from "./components/MyRoutines";
import { Navbar } from "./components/NavBar";
import Home from "./components/Home";
import { PublicActivities } from "./components/PublicActivities";
// import { ActivityForm } from "./components/Activities";       ******THIS NEEDS TO BE COMMENTED BACK IN!

import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ routines, setRoutines ] = useState([])
  const [ myRoutines, setMyRoutines ] = useState([])
  const [publicRoutineList, setPublicRoutineList] = useState([]);
  const [privateRoutineList, setPrivateRoutineList] = useState([]);
  const [publicActivityList, setPublicActivityList] = useState([]);
  // const [ activities, setActivites ] = useState([])      ******THIS NEEDS TO BE COMMENTED BACK IN!


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
        <Route path="/MyRoutines" element={<PrivateRoutines privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList} token ={token} user={user} /> }/>
       

      
        {/* Activities */}
        <Route path="/Activities" element={<PublicActivities publicActivityList={publicActivityList}  /> } />
  

        {/* //Profile */}
        {/* <Route path="/Profile" element={<Profile} */}
      
      </Routes>
      
    </div>
  )
}

export default App


// routines={routines} setRoutines={setRoutines}
// setPublicRoutineList={setPublicRoutineList}