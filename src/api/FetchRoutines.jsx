const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// GET /api/routines
export const FetchRoutines = async () => {
    try {
      const response = await fetch(
        `${APIURL}/routines`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        }
      );
  
      const result = await response.json();
  
    //   console.log(result.data.posts);
      return result;
    } catch (error) {
      console.error(error);
    }
  };