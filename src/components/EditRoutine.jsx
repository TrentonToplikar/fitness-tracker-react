import React, { useState } from "react";
import { deleteActivity, updateRoutine } from "../api/myRoutinesAPI";
import { deleteRoutine } from "../api/myRoutinesAPI";
import { attachActivityToRoutine } from "../api/myRoutinesAPI";
import './styles/PublicRoutines.css'


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
        <div className="individual-my-routines">
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
          className="edit-my-routine-input"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            type="text"
            placeholder="Enter Name Here"
            ></input>
          <label>Goal:</label>
          <input
          className="edit-my-routine-input"
            value={editGoal}
            onChange={(e) => setEditGoal(e.target.value)}
            type="text"
            placeholder="Enter Goal Here"
            ></input>
            <label>IsPublic?</label>
            <input
            className="edit-my-routine-input"
            value={editIsPublic}
            onChange={(e) => setEditIsPublic(!editIsPublic)}
            type="checkbox"
            ></input>
          <button className="edit-my-routine-button" type="submit">Submit</button>
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
          className="edit-my-routine-input"
            value={duration}
            onChange={(e) => setDuration(e.target.value)
            }
            type="text"
            placeholder="Enter Duration Here"
            ></input>
          <label>Count:</label>
          <input
          className="edit-my-routine-input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            type="text"
            placeholder="Enter Count Here"
            ></input>
            
            <button className="edit-my-routine-button" type="submit">Submit</button>
        </form> }
            <button className="edit-my-routine-button" onClick={() => setToggle(!toggle)} type="edit">Edit Routine</button>
            <button className="edit-my-routine-button" onClick={async () => {await deleteRoutine( token, routineId);}}>Delete Routine</button>

            <button className="edit-my-routine-button" onClick={() => setActivityToggle(!activityToggle)} type="edit">Activity</button>
            <button className="edit-my-routine-button" onClick={async () => {await deleteActivity( token);}}>Delete Activity</button>
          </div>
      );
    };
