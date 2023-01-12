import React, { useState, useEffect } from "react";
import {fetchPublicRoutines} from "../api/routinesAPI";

const Home = () => {
//   return (
//     <>
//       <div>This is the home page!</div>
//       {/* <p>This is where posts could go in Stranger's things.</p> */}
//     </>
//   );
// };
const [publicRoutineList, setPublicRoutineList] = useState([]);
  
  useEffect(() => {
    const getAllPublicRoutines = async () => {
      const data = await fetchPublicRoutines();
      setPublicRoutineList(data);
      
    };
    getAllPublicRoutines();
  }, []);
  console.log(publicRoutineList);
// rending the routine/activities list
  const routineAndActivitiesList = publicRoutineList.map(({id, creatorName, name, goal, activities}) => {
    // console.log("THIS IS THE ACTIVITIES NAME",routine)
    return( <div className="All Routines" key={id}>
    <h2>Name {name}</h2>
    <h3>Goal {goal}</h3>
    <h3>CreatorId {creatorName}</h3>
    {/* <h2>Activity Name {activities.name}</h2> we need to attatch the activites!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

  </div>)
  }   
  )

    
  return <div className="All Routines">{routineAndActivitiesList}</div>;
}


export default Home;