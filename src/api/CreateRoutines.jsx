const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

////////// this is what makes the post through the api  \\\\\\\\\\
export const CreateRoutines = async ({
  token,
  name,
  goal,
  creatorName,
  activities,
}) => {
  try {
    const response = await fetch(
      `${APIURL}/users/${creatorName}/routines`,
      {
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
      }
    );

    const result = response.json();
    console.log(result);
  } catch (error) {
    console.error("oh no");
  }
};