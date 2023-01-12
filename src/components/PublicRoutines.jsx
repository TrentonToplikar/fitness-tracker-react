import React, { useState, useEffect } from "react";
// import {  } from "react-dom";
import {fetchPublicRoutines} from "../api/routinesAPI";

//THIS IS PUBLIC ROUTINES AND UNREGISTERED USER
        // see a list of all public routines showing:
        // The routine name, goal, and creator's username
        // A list of activities for the routine, including their name, description, and duration and/or count



export const PublicRoutines= () => {
  const [publicRoutineList, setPublicRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPublicRoutines = async () => {
      const data = await fetchPublicRoutines();
      setPublicRoutineList(data);
      
    };
    getAllPublicRoutines();
  }, []);
  console.log(publicRoutineList);
// rending the routine/activities list
  const routineAndActivitiesList = publicRoutineList.map(({id, creatorName, name, goal, activities}) => {
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


