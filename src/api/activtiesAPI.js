const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// POST /api/activities (*)
export const createActivities = async (token, name, description) => {
  try {
    console.log("THIS IS MY TOKEN", token);
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("oh no - activities");
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
export const fetchPublicActivities = async () => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      method: "GET",
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
