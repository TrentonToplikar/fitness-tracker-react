const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// POST /api/activities (*)
export const createActivity = async (name, description) => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          name,
          description,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

// PATCH /api/activities/:activityId (*)
export const updateActivity = async (name, description, activityId) => {
  try {
    const response = await fetch(`${APIURL}/activities/${activityId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no");
  }
};

// GET /api/activities
export const fetchActivities = async () => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
