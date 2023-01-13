import React, { useState, useEffect } from "react";
// import {  } from "react-dom";
import {fetchMyRoutines} from "../api/myRoutinesAPI";
import { EditForm } from "./EditRoutine";
import { RoutineForm } from "./RoutineForm";
// import { EditForm } from "./EditRoutine";

export const PrivateRoutines= (props) => {
  const [privateRoutineList, setPrivateRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPrivateRoutines = async () => {
      
      console.log("THESE ARE MY PROPS", props)
      
      const data = await fetchMyRoutines(localStorage.getItem("user"));
      setPrivateRoutineList(data);
      // console.log("THIS IS MY DATA------->",data);
      
    }; if (localStorage.getItem("user")){
      getAllPrivateRoutines();
    }
  }, []);
// rending the routine/activities list
// const editButton = document.createElement("button");
  // editButton.addEventListener("click", () => {
  const routineAndActivitiesList = privateRoutineList?.map(({id, creatorName, name, goal, activities, isPublic}) => {
    // console.log("this is our activities!!!!:", activities);
    // console.log(activities.name);
    return( <div className="All Routines" key={id}>
    <EditForm name={name} goal={goal} ispublic={isPublic} routineId={id}/>
    {/* <button className="viewpost" onClick={() => setSelectedPost(post)}>
            Edit
          </button> */}

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
  return (
    <div className="RoutineForm"> 
    <RoutineForm privateRoutineList={privateRoutineList} setPrivateRoutineList={setPrivateRoutineList}/>
  <div className="All Routines">{routineAndActivitiesList}</div>
    </div>)

}










