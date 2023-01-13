import React, { useState } from "react";
import { updateRoutine } from "../api/myRoutinesAPI";



export const EditForm = ({ privateRoutineList, setPrivateRoutineList, name, goal, isPublic, routineId }) => {
    const [creatorName, setCreatorName] = useState("");
    const [activities, setActivities] = useState("");
    const token = localStorage.getItem("token")
    const [toggle, setToggle ] = useState(false)
    const [editName, setEditName ] = useState(name)
    const [editGoal, setEditGoal ] = useState(goal)
    const [editIsPublic, setEditIsPublic] =useState(isPublic)

    const handleSubmit= async (e) => {
      if (token) {
        console.log("DO WE HAVE THE TOEKN??", token)
        e.preventDefault();
       const newRoutine = await updateRoutine( token, editName, editGoal, editIsPublic, routineId );
        // setPrivateRoutineList([newRoutine, ...privateRoutineList])
        // setName("");
        // setGoal("");
        // setCreatorName("");
        // setActivities("");
        setToggle(!toggle)
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
        <button onClick={() => setToggle(!toggle)} type="edit">Edit</button>
            </div>
      );
    };
