const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// GET /api/activities
export const FetchActivities = async () => {
    try {
      const response = await fetch(`${APIURL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };