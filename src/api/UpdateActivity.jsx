const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// PATCH /api/activities/:activityId (*)
export const UpdateActivity = async (name, description, activityId) => {
    try {
      const response = await fetch(`${APIURL}/activities/${activityId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name,
          description,
        })
      })
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error("oh no");
    }
  };