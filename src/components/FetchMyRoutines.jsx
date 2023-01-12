import React, { useState, useEffect } from "react";
// import {  } from "react-dom";
import {fetchMyRoutines} from "../api/myRoutinesAPI";

export const PrivateRoutines= (props) => {
  const [privateRoutineList, setPrivateRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPrivateRoutines = async () => {
      
      console.log("THESE ARE MY PROPS", props)
      
      const data = await fetchMyRoutines(localStorage.getItem("user"));
      setPrivateRoutineList(data);
      // console.log("THIS IS MY DATA------->",data);
      
    };
    getAllPrivateRoutines();
  }, []);
// rending the routine/activities list
  const routineAndActivitiesList = privateRoutineList?.map(({id, creatorName, name, goal, activities}) => {
    // console.log("this is our activities!!!!:", activities);
    // console.log(activities.name);
    return( <div className="All Routines" key={id}>
    <h2>Name: {name}</h2>
    <h3>Goal: {goal}</h3>
    <h3>Creator Name: {creatorName}</h3>
    <div>

      {
      activities?.map(({id, name, description, count, duration}) => {
      return( <div className="All Activities" key={id}>
      <h3>Activity Name:  {name}</h3>
      <h4>Description: {description}</h4>
      <h4>Duration: {duration}</h4>
      <h4>Count: {count}</h4>
      </div>
        )})
      }
    </div>
  </div>)
  }   
  )
  return <div className="All Routines">{routineAndActivitiesList}</div>;
}









