import React, { useState, useEffect } from "react";
import {fetchMyRoutines} from "../api/myRoutinesAPI";
import { EditForm } from "./EditRoutine";
import { RoutineForm } from "./RoutineForm";
import "./styles/PublicRoutines.css"

export const PrivateRoutines= (props) => {
  const [privateRoutineList, setPrivateRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPrivateRoutines = async () => {
      console.log("THESE ARE MY PROPS", props)
      const data = await fetchMyRoutines(localStorage.getItem("user"));
      setPrivateRoutineList(data);
    
    }; if (localStorage.getItem("user")){
      getAllPrivateRoutines();
    }
  }, []);
  const routineAndActivitiesList = privateRoutineList?.map(({id, creatorName, name, goal, activities, isPublic, duration}) => {
    return( 
    <div className="my-individual-routines-container" key={id}>
      <EditForm name={name} goal={goal} ispublic={isPublic} routineId={id}/>
      <div>
        {
        activities?.map(({id, name, description, count, duration}) => {
        return( 
        <div className="AllActivities" key={id}>
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

  return (
    <div className="my-routine-container">
    <h1 className="routines-header">My Routines</h1>
      <div className="RoutineForm"> 
      <RoutineForm privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList}/>
      <div className="my-routines-child">{routineAndActivitiesList}</div>
      </div>
    </div>
    )

}










