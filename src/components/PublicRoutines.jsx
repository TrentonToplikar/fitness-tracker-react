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
  const routineAndActivitiesList = publicRoutineList.map(({id, activityId, creatorId, creatorName, isPublic, name, goal, activities}) => {
    return( <div className="All Routines" key={id}>
    <h2>Name {name}</h2>
    <h3>Goal {goal}</h3>
    <h3>CreatorId {creatorName}</h3>
    <div>
      <h2>Name {activities.name}</h2>
      <h2>Description{activities.description}</h2>
      <h2>Duration{activities.duration}</h2>
    </div>
  </div>)
  }   
  )

    
  return <div className="All Routines">{routineAndActivitiesList}</div>;
}


