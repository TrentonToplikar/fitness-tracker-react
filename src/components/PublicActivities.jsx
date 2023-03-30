import React, { useState, useEffect } from "react";
import { fetchPublicActivities } from "../api/activtiesAPI";
import { ActivityForm } from "./ActivityForm";
import "./styles/PublicActivities.css"

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
  <div className=" individual-activity">
              <table className="allActivities activity-header activity-table" key={id}>
                <tbody className="tbody-header activity-body">
                  <tr>
                    <th className="th-activity">Activity Name</th>
                    <th className="th-activity">Description</th>
                  </tr>
                </tbody>
              </table>
      <table className="allActivities activity-table" key={id}>
        <tbody className="activity-body">
          <tr className="activity-content">
            <td className="activity-dt">{name}</td>
            <td className="activity-dt">{description}</td>
          </tr>
        </tbody>
      </table>
      </div>
        )
      }
      )
  
  return (
    <div className="activities-container">
      {!activityToken ? <>
          <h1 className="activities-header" >Activities</h1>
          <ActivityForm publicActivityList={publicActivityList} setPublicActivityList={setPublicActivityList} />
          <div className="AllActivities activities-page-list">{ActivityList}</div>
      </> :
      <div>
        <h1 className="activities-header">Activities</h1>
        <div className="AllActivities activities-page-list">{ActivityList}</div>
      </div>
      }
    </div>
  )
}