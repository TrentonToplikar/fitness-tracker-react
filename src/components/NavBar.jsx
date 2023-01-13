import React from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom"
import { Logout } from "./Login";
import { PublicRoutines } from "./PublicRoutines";
import { RoutineForm } from "./RoutineForm";
import { PublicActivities } from "./PublicActivities";




export const Navbar = ({ setToken, user }) => {

  const LoginLogout = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink
            to="/"
            id="logout"
            onClick={() => {
              Logout(setToken);
            }}
          >
            Logout
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Login" id="login">
            {" "}
            Login{" "}
          </NavLink>
        );
      }
    };
  //   const MyRoutines = () => {
  //     if (localStorage.getItem("token")) {
  //     return (
  //       <NavLink
  //           to="/myRoutines"
  //           id="MyRoutines"
  //           onClick={() => {
  //             RoutineForm();
  //           }}
  //           ></NavLink>
  //     );
  //   }
  // //    return (
  // //     <NavLink to="Login" id="login">
  // //  {" "}
  // //    Login{" "}
  // // GetAllPublicRoutines()
  // //    </NavLink>
  // //    );
  //   };
    const PublicRoutines = () => {
     
        return (
          <NavLink to="/routines" id="publicRoutines">
            {" "}
            Routines{" "}
          </NavLink>
        );
      
    };

    const PublicActivities = () => {
     
      return (
        <NavLink to="/activities" id="publicActivtives">
          {" "}
          Activities{" "}
        </NavLink>
      );
    
  };
    
    const MyRoutines = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink to="MyRoutines" id="RoutineForm">
            {" "}
            MyRoutines{" "}
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Login" id="login">
            {" "}
            {localStorage.getItem("user")}{" "}
          </NavLink>
        );
      }
    };


    const RegisterOrProfile = () => {
      if (localStorage.getItem("token")) {
        return (
          <NavLink to="Profile" id="profile">
            {" "}
            {localStorage.getItem("user")}{" "}
          </NavLink>
        );
      } else {
        return (
          <NavLink to="Register" id="register">
            {" "}
            Register{" "}
          </NavLink>
        );
      }
    };
    return (
      <div id="navbar">
        <nav>
          <NavLink to="/" id="home">
            {" "}
            Home{" "}
          </NavLink>
          <PublicRoutines />
          <PublicActivities />
          <MyRoutines />
        </nav>
        {/* <img id="logo" src="Stranger_Things_logo.png" /> */}
        <nav>
          <RegisterOrProfile />
          <LoginLogout />
        </nav>
      </div>
    );
  };