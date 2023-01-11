import React, { useState } from "react";
import { CreateActivities } from "../api/CreateActivities";

// As an UNREGISTERED VISITOR on the Activities tab, I want to:
    // see a list of all activities which have been created

// As a REGISTERED USER on the Activities tab, I want to:
    // be shown a form to create a new activity (by name and description)
    // be shown an error if the activity already exists

export const ActivityForm = ({ token }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <form
          className="ActivityForm"
          onSubmit={async (e) => {
            if (token) {
              e.preventDefault();
              CreateActivities({ token, name, description });
              setName("");
              setDescription("");
            } else {
              window.alert("Please Login or Register");
            }
          }}
        >
          <label>Activity:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Activity Here"
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
