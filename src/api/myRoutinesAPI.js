// edit Routines

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
          name,
          goal,
          creatorName,
          activities,
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
