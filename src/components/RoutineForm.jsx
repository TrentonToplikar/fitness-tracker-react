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


export const RoutineForm = ({ token }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [creatorName, setCreatorName] = useState("");
    const [activities, setActivities] = useState("");

    return (
        <form
          className="RoutineForm"
          onSubmit={async (e) => {
            if (token) {
              e.preventDefault();
              createRoutines({ token, name, goal, creatorName, activities });
              setName("");
              setGoal("");
              setCreatorName("");
              setActivities("");
            } else {
              window.alert("Please Login or Register");
            }
          }}
        >
          <label>Routine:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Routine Here"
          ></input>
          <label>Goal:</label>
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type="text"
            placeholder="Enter Goal Here"
          ></input>
          <label>Location:</label>
          <input
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            type="text"
            placeholder="Enter Creator Name Here"
          ></input>
          <label>Price:</label>
          <input
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
            type="text"
            placeholder="Enter Activities Here"
          ></input>
          <button type="submit">Submit</button>
        </form>
      );
    };

