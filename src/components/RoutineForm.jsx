import React, { useState } from "react";
import { createRoutines } from "../api/myRoutinesAPI";



// As a REGISTERED USER (doesn't matter if public or private?)

// be shown a form to create a new routine
    // the form should have text fields for name and goal
    

    // for each routine which is owned by me I should
      // be able to update the name and goal for the routine
      // be able to delete the entire routine
      // be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
      // be able to update the duration or count of any activity on the routine
      // be able to remove any activity from the routine


export const RoutineForm = ({ privateRoutineList, setPrivateRoutineList }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [creatorName, setCreatorName] = useState("");
    const [activities, setActivities] = useState("");
    const [isPublic, setIsPublic] = useState(false)
    const token = localStorage.getItem("token")

    const handleSubmit= async (e) => {
      if (token) {
        console.log("DO WE HAVE THE TOEKN??", token)
        e.preventDefault();
       const newRoutine = await createRoutines( token, name, goal, isPublic );
        setPrivateRoutineList([newRoutine, ...privateRoutineList])
        setName("");
        setGoal("");
        setCreatorName("");
        setActivities("");

      } else {
        window.alert("Please Login or Register");
      }
    }

    return (
        <form
          className="RoutineForm"
          onSubmit={ (e) =>
            handleSubmit(e)
          }
        >
          <label>Routine:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name Here"
          ></input>
          <label>Goal:</label>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type="text"
            placeholder="Enter Goal Here"
          ></input>
          <button type="submit">Submit</button>
        </form>
      );
    };

