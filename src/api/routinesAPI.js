// Attaches a single activity to a routine.
//Prevents duplication on (routineId, activityId) pair.
const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// POST /api/routines/:routineId/activities
export const fetchPublicRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

// POST /api/routines/:routineId/activities
export const attachActivityToRoutine = async (
  activityId,
  count,
  duration,
  routineId
) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}/activities`, {
      method: "POST",
      body: JSON.stringify({
        activityId,
        count,
        duration,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};
