const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// POST /api/activities (*)
export const CreateActivity = async (name, description) => {
    try {
      const response = await fetch(
        `${APIURL}/activities`,
        {
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
        }
      );
      const result = await response.json();
      console.log(result);
      return result
    } catch (error) {
      console.error("oh no");
    }
  };