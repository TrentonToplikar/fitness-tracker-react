import React, { useState } from "react";
import { createActivities } from "../api/activtiesAPI";

// ************* Form that creates activities ************\\
export const ActivityForm = ({ publicActivityList, setPublicActivityList }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const token = localStorage.getItem("token")



    const handleSubmit= async (e) => {
      if (token) {
        e.preventDefault();
        const newActivity = await createActivities( token, name, description);
        if (newActivity.error) {
          alert(newActivity.message)
      }
        setPublicActivityList([newActivity, ...publicActivityList])
        setName("");
        setDescription("");
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
        <div className="activity-inputs">
        <input
        required
        className="activity-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Activity Name..."
        ></input>
        <input
        required
        className="activity-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description..."
        ></input>
        </div>
        <button className="activity-button edit-my-routine-button" type="submit">Submit</button>
      </form>
    );
  };

