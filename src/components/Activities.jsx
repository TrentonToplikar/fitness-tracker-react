import React, { useState } from "react";
import { createActivities } from "../api/activtiesAPI";

// As a REGISTERED USER on the Activities tab, I want to:
    // be shown a form to create a new activity (by name and description)
    // be shown an error if the activity already exists

export const ActivityForm = ({ publicActivityList, setPublicActivityList }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const token = localStorage.getItem("token")



    const handleSubmit= async (e) => {
      if (token) {
        console.log("DO WE HAVE THE (activities)TOEKN??", token);
   
        
        e.preventDefault();
        const newActivity = await createActivities( token, name, description);
        setPublicActivityList([newActivity, ...publicActivityList])
        setName("");
        setDescription("");
     console.log("this is the new activity ----:", newActivity);
      } else {
        window.alert("Please Login or Register");
      }
    }

    return (
      <form
        className="ActivityForm"
        onSubmit={ (e) =>
          handleSubmit(e)
        }
      >
        <label>Activity:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name Here"
        ></input>
        <label>Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description Here"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

