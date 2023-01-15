const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// GET /api/routines
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
