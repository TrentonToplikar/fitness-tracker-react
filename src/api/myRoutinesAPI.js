// edit Routines
const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

////////// create routines \\\\\\\\\\
export const createRoutines = async ({
  token,
  name,
  goal,
  creatorName,
  activities,
}) => {
  try {
    const response = await fetch(`${APIURL}/users/${creatorName}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routinesByUser: {
          name: name,
          goal: goal,
          creatorName: creatorName,
          activities: activities,
        },
      }),
    });

    const result = response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

export const fetchMyRoutines = async (user) => {
  try {
    const token = window.localStorage.getItem("token");
    console.log("THISIS THE USER", user);
    if (token) {
      const response = await fetch(`${APIURL}/users/${user}/routines`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log("THIS IS MY RESPONSE", result);
      return result;
    }
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
        activityId: activityId,
        count: count,
        duration: duration,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

// DELETE /api/routines/:routineId (**)
export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);

    const newRoutines = routineList.filter(
      (routine) => routine.id !== routineId
    );
    setRoutineList(newRoutines);
    return result;
  } catch (error) {
    console.error(error);
  }
};
