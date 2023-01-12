const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

////////// this logs you into the website and gives you a token  \\\\\\\\\\
// POST /api/users/login
export const loginAPI = async (username, password) => {
  try {
    const loginVerify = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await loginVerify.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
