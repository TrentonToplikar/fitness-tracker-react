const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// DELETE /api/routines/:routineId (**)
export const DeleteRoutine = async (token, routineId) => {
    try {
      const response = await fetch(
        `${APIURL}/routines/${routineId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
  
      const newRoutines = routineList.filter((routine) => routine.id !== routineId);
      setRoutineList(newRoutines);
      return result
    } catch (error) {
      console.error(error);
    }
  };