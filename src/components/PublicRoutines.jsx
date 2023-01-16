import React, { useState, useEffect } from "react";
import {fetchPublicRoutines} from "../api/routinesAPI";
import "./routineANDactivities.css"

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
  const routineAndActivitiesList = publicRoutineList.map(({id, creatorName, name, goal, activities}) => {
    return( <div className="AllRoutines" key={id}>
    <h2>Name: {name}</h2>
    <h3>Goal: {goal}</h3>
    <h3>Creator Name: {creatorName}</h3>
    <div>

      {
      activities?.map(({id, name, description, count, duration}) => {
      return( <div className="AllActivities" key={id}>
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
  return (<div>
    <h1>Routines</h1>
    <div className="AllRoutines">{routineAndActivitiesList}</div>
  </div>
    ) 
}


