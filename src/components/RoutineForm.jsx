import React, { useState } from "react";
import { createRoutines } from "../api/myRoutinesAPI";
import './styles/PublicRoutines.css'
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
      className="my-routine-form"
      onSubmit={ (e) =>
        handleSubmit(e)
      }
    >
      <input
      required
      className="activity-input"
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Routine Name..."
      ></input>
      <input
      required
      className="activity-input"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        type="text"
        placeholder="Goal..."
      ></input>
      <button className="activity-button" type="submit">Submit</button>
    </form>
      );
    };

