import React, { useState } from "react";
import { updateRoutine } from "../api/myRoutinesAPI";
import { deleteRoutine } from "../api/myRoutinesAPI";
import { attachActivityToRoutine } from "../api/myRoutinesAPI";



export const EditForm = ({ privateRoutineList, setPrivateRoutineList, name, goal, isPublic, routineId, success, activityId, count, duration}) => {
    const [creatorName, setCreatorName] = useState("");
    // const [activities, setActivities] = useState("");
    const token = localStorage.getItem("token")
    const [toggle, setToggle ] = useState(false)
    const [toggleActivity, setToggleActivity ] = useState(false)
    const [editName, setEditName ] = useState(name)
    const [editGoal, setEditGoal ] = useState(goal)
    const [editIsPublic, setEditIsPublic] =useState(isPublic)
    // const [routine, setRoutine] = useState("");
    // const [success, setSuccess] = useState(success);
const [ editActivityId, setEditActivityId ] = useState(activityId)
const [ editCount, setEditCount ] = useState(count)
const [ editDuration, setEditDuration ] = useState(goal)

    const handleSubmit= async (e) => {
      if (token) {
        console.log("DO WE HAVE THE TOEKN??", token)
        e.preventDefault();
       await updateRoutine( token, editName, editGoal, editIsPublic, routineId );
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
    const handleActivitySubmit = async (e) => {
      if (token) {
        e.preventDefault();
        await attachActivityToRoutine( token, routineId, activityId, count, duration)
        setToggleActivity(!toggleActivity)
      }
    }


    return (
        <div>
            {!toggle ? <>
            <h2>Name: {editName}</h2>
            <h3>Goal: {editGoal}</h3>
            <input value={editDuration}></input>
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




          <form
          className="ActivityForm"
          onSubmit={ (e) =>
            handleActivitySubmit(e)
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
        </form>  
        </form>  
               
        }
        
        <button onClick={() => setToggle(!toggle)} type="edit">Edit</button>
        <button
        onClick={async () => {
          await deleteRoutine( token, routineId);
            // setPrivateRoutineList([
            //   ...allPosts.filter((post) => post.id !== postDeleted.id),
          // ]);

           // const newRoutines = routineList.filter(
    //   (routine) => routine.id !== routineId
    // );
    // setRoutineList(newRoutines);
        }} 
      >
        Delete Routine
      </button>
      
      </div>
      );
    };
