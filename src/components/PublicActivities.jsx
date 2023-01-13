import React, { useState, useEffect } from "react";

import { fetchPublicActivities } from "../api/activtiesAPI";
import { ActivityForm } from "./Activities";


export const PublicActivities= () => {
  const [publicActivityList, setPublicActivityList] = useState([]);
  
  useEffect(() => {
    const getAllPublicActivities = async () => {
      const data = await fetchPublicActivities();
      setPublicActivityList(data);
      
    };
    getAllPublicActivities();
  }, []);
  console.log(publicActivityList);
// rending the routine/activities list
  const ActivityList = publicActivityList.map(({id, name, description}) => {
    // console.log("this is our activities!!!!:", activities);
    return( <div className="All Routines" key={id}>
    <h2>Name: {name}</h2>
    <h3>Description: {description}</h3>
  </div>)
  }   
  )
  
  
  return (
    <div className="ActivityForm"> 
    <ActivityForm publicActivityList={publicActivityList} setPublicActivityList={setPublicActivityList} />
    <div className="All Activities">{ActivityList}</div>
    </div>
     )
}


