import React, { useState } from "react";
import { createActivities } from "../api/activtiesAPI";

// ************* Form that creates activities ************\\
export const ActivityForm = ({ publicActivityList, setPublicActivityList }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const token = localStorage.getItem("token")



    const handleSubmit= async (e) => {
      if (token) {
        console.log("DO WE HAVE THE (activities)TOEKN??", token);
        e.preventDefault();
        const newActivity = await createActivities( token, name, description);
        if (newActivity.error) {
          alert(newActivity.message)
      }
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
          placeholder="Enter Name"
        ></input>
        <label>Description:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter Description"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  };

