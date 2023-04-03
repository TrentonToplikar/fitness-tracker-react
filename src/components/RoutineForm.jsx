import React, { useState } from "react";
import { createRoutines } from "../api/myRoutinesAPI";

export const RoutineForm = ({ privateRoutineList, setPrivateRoutineList }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [creatorName, setCreatorName] = useState("");
    const [activities, setActivities] = useState("");
    const [isPublic, setIsPublic] = useState(false)
    const token = localStorage.getItem("token")

    const handleSubmit= async (e) => {
      if (token) {
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

