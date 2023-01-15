import React, { useState, useEffect } from "react";

import { fetchPublicActivities } from "../api/activtiesAPI";
import { ActivityForm } from "./ActivityForm";

// ***************Displays an activity list.... and displays a pop-pup if an unregistered user attempts to create a new activity ************** \\
export const PublicActivities= (props) => {
  const [publicActivityList, setPublicActivityList] = useState([]);
  const [activityToken, setActivityToken] = useState(false)
  
  useEffect(() => {
    const getAllPublicActivities = async () => {
      const data = await fetchPublicActivities();
      setPublicActivityList(data);
      
    }; 
    getAllPublicActivities();
  }, []);

  const ActivityList = publicActivityList.map(({id, name, description}) => {
    return( 
        <div className="All Activities" key={id}>
            <h2>Name: {name}</h2>
            <h3>Description: {description}</h3>
        </div>
        )
      }
      )
  
  return (
    <div>
      {!activityToken ? <>
        <div className="ActivityForm"> 
          <ActivityForm publicActivityList={publicActivityList} setPublicActivityList={setPublicActivityList}/>
          <h1>Activities</h1>
          <div className="All Activities">{ActivityList}</div>
        </div>
      </> :
      <div>
        <h1>Activities</h1>
        <div className="All Activities">{ActivityList}</div>
      </div>
      }
    </div>
  )
}