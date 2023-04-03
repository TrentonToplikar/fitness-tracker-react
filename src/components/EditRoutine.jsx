import React, { useState } from "react";
import { deleteActivity, updateRoutine } from "../api/myRoutinesAPI";
import { deleteRoutine } from "../api/myRoutinesAPI";
import { attachActivityToRoutine } from "../api/myRoutinesAPI";



export const EditForm = ({ name, goal, isPublic, routineId}) => {
    const token = localStorage.getItem("token")
    const [toggle, setToggle ] = useState(false)
    const [editName, setEditName ] = useState(name)
    const [editGoal, setEditGoal ] = useState(goal)
    const [editIsPublic, setEditIsPublic] =useState(isPublic)
    const [activityToggle, setActivityToggle ] = useState()
    const [count, setCount ] = useState("")
    const [duration, setDuration ] = useState("")

    const handleSubmit= async (e) => {
      if (token) {
        e.preventDefault();
        await updateRoutine( token, editName, editGoal, editIsPublic, routineId );
        setToggle(!toggle)
      } else {
        window.alert("Please Login or Register");
      }
    }

    
    const handleAttachActivity= async (e) => {
      if (token) {
        e.preventDefault();
        await attachActivityToRoutine(  token,
          routineId,
          count,
          duration );
        setActivityToggle(!activityToggle)
      } else {
        window.alert("Please Login or Register");
      }
    }

    return (
        <div>
            {!toggle ? <>
            <h2>Name: {editName}</h2>
            <h3>Goal: {editGoal}</h3>
            </> :
        <form
          className="RoutineForm"
          onSubmit={ (e) =>
            handleSubmit(e)
        }
        >
          <label>Routine:</label>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            type="text"
            placeholder="Enter Name Here"
            ></input>
          <label>Goal:</label>
          <input
            value={editGoal}
            onChange={(e) => setEditGoal(e.target.value)}
            type="text"
            placeholder="Enter Goal Here"
            ></input>
            <label>IsPublic?</label>
            <input
            value={editIsPublic}
            onChange={(e) => setEditIsPublic(!editIsPublic)}
            type="checkbox"
            ></input>
          <button type="submit">Submit</button>
        </form> }

        
         
            {!activityToggle ? <>
            </> :
        <form
          className="RoutineForm"
          onSubmit={ (e) =>
          handleAttachActivity(e)
        }
        >
          <label>Duration:</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)
            }
            type="text"
            placeholder="Enter Duration Here"
            ></input>
          <label>Count:</label>
          <input
            value={count}
            onChange={(e) => setCount(e.target.value)}
            type="text"
            placeholder="Enter Count Here"
            ></input>
            
            <button type="submit">Submit</button>
        </form> }
            <button onClick={() => setToggle(!toggle)} type="edit">Edit Routine</button>
            <button onClick={async () => {await deleteRoutine( token, routineId);}}>Delete Routine</button>

            <button onClick={() => setActivityToggle(!activityToggle)} type="edit">Activity</button>
            <button onClick={async () => {await deleteActivity( token);}}>Delete Activity</button>
          </div>
      );
    };
