import React from "react";
import { NavLink } from "react-router-dom"
import { Logout } from "./Login";


export const Navbar = ({ token, setToken, user }) => {

  const LoginLogout = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink
            to="/"
            id="logout"
            className="hover-underline-animation"
            onClick={() => {
              Logout(setToken);
            }}
          >
            Logout
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Login" id="login" className="hover-underline-animation">
            {" "}
            Login{" "}
          </NavLink>
        );
      }
    };

    const PublicRoutines = () => {
        return (
          <NavLink to="/routines" id="publicRoutines" className="hover-underline-animation">
            {" "}
            Routines{" "}
          </NavLink>
        );
      
    };

    const PublicActivities = () => {
      return (
        <NavLink to="/activities" id="publicActivtives" className="hover-underline-animation">
          {" "}
          Activities{" "}
        </NavLink>
      );
    
  };
  

    const MyRoutines = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink to="myroutines" id="routineForm" className="hover-underline-animation">
            {" "}
            MyRoutines{" "}
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Login" id="login" className="hover-underline-animation">
            {" "}
            {localStorage.getItem("user")}{" "}
          </NavLink>
        );
      }
    };


    const RegisterOrProfile = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink to="Profile" id="profile" className="hover-underline-animation">
            {" "}
            {localStorage.getItem("user")}{" "}
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Register" id="register" className="hover-underline-animation">
            {" "}
            Register{" "}
          </NavLink>
        );
      }
    };
    
    
    return (
      <div className="navbar-div">
        {localStorage.getItem("token") ? <>
          <nav>
          <div className="top-of-page">
            Improve your health with as little as 15 minutes of exercise today!
          </div>
          <div className="navigation-bar">
            <div className="left-nav">
              <NavLink to="/" id="home" className="hover-underline-animation">
                {" "}
                Home{" "}
              </NavLink> |
              <PublicRoutines /> |
              <PublicActivities /> 
            </div>

            <div className="right-nav">
              <LoginLogout /> | 
              <RegisterOrProfile /> |
              <MyRoutines />
            </div> 
          </div>
        </nav> 
        </> :
             <nav>
             <div className="top-of-page">
               Improve your health with as little as 15 minutes of exercise today!
             </div>
             <div className="navigation-bar">
               <div className="left-nav">
                 <NavLink to="/" id="home" className="hover-underline-animation">
                   {" "}
                   Home{" "}
                 </NavLink> |
                 <PublicRoutines /> |
                 <PublicActivities /> 
               </div>
   
               <div className="right-nav">
                 <LoginLogout /> | 
                 <RegisterOrProfile /> 
                 <MyRoutines />
               </div> 
             </div>
           </nav>     
        }

      </div>
    );
  };