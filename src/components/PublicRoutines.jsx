import React, { useState, useEffect } from "react";
import {fetchPublicRoutines} from "../api/routinesAPI";
import "./styles/PublicRoutines.css"

export const PublicRoutines= () => {
  const [publicRoutineList, setPublicRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPublicRoutines = async () => {
      const data = await fetchPublicRoutines();
      setPublicRoutineList(data);
      
    };
    getAllPublicRoutines();
  }, []);
  const routineAndActivitiesList = publicRoutineList.slice(0,30).map(({id, creatorName, name, goal, activities}) => {
    return( 
      <div className="child-routine-activity" key={id}>
        <div className="child-routine">
          <h2 className="routine-words">Name: {name}</h2>
          <h3 className="routine-words">Goal: {goal}</h3>
          <h3 className="routine-words">Creator Name: {creatorName}</h3>
        </div>
        <div className="child-activity">
              <table className="allActivities activity-header" key={id}>
                <tbody className="tbody-header">
                  <tr>
                    <th>Activity Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Count</th>
                  </tr>
                </tbody>
              </table>
          { activities?.map(({id, name, description, count, duration}) => {
            return( 
              <table className="allActivities " key={id}>
                <tbody className="tbody-activities">
                  <tr className="activity-content">
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{duration}</td>
                    <td>{count}</td>
                  </tr>
                </tbody>
              </table>
          )})
          }
      </div>
      <hr className="horizontal-rule" />
      </div>
  )
  }   
  )
  return (
  <div className="routines-container">
    <h1 className="routines-header">Routines</h1>
    <div className="individial-routines-container">{routineAndActivitiesList}</div>
  </div>
    ) 
}


