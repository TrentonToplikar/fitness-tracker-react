const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

//registering a user to our API
//sends response and shows a token in an object

// POST /api/users/register
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    //object with data that contains a token which is needed to make other request to the API
    //deconstruction of the object data same as token = response.data.token
    //token used as a key to access other things in the API (bc we must be a register user to utilize the API)
    // this is saying const token = response.data.token
    const {
      data: { token },
    } = await response.json();
    //console.log("myresponse data", token);
    return token;
  } catch (error) {
    console.error(error);
    console.log("myresponse data", token);
  }
};

export const authenticateUser = async (username, password, type) => {
  // console.log('authenticating user! method type: ', method);
  try {
    const response = await fetch(`${APIURL}/users/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
    // console.log(result.data);
    if (!result.data.token) {
      return;
    } else {
      window.localStorage.setItem("strange-token", result.data.token);

      return await me();
    }
  } catch (error) {
    console.error(error);
  }
};

//another API request that is going to take in a token
//takes the token in and returns data
export const me = async () => {
  try {
    const token = window.localStorage.getItem("fitness-token");

    if (token) {
      const response = await fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const { data: user } = await response.json();
      console.log("hey look it is me: ", user);
      return user;
    }
    return;
  } catch (error) {
    console.error(error);
  }
};
