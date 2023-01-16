const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

export const createRoutines = async (token, name, goal, isPublic) => {
  try {
    console.log("THIS IS MY TOKE", token);
    const response = await fetch(`${APIURL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });

    const result = await response.json();
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
  token,
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routineId: routineId,
        activityId: activityId,
        count: count,
        duration: duration,
      }),
    });
    const result = await response.json();
    console.log("THIS IS MY RESULT", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

// PATCH /api/routines/:routineId (**)

export const updateRoutine = async (token, name, goal, isPublic, routineId) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${APIURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteActivity = async (token, id) => {
  try {
    const response = await fetch(`${APIURL}/routine_activities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
