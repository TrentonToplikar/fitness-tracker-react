const APIURL = `http://fitnesstrac-kr.herokuapp.com/api`;

// POST /api/users/register
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data = await response.json();
    console.log("registerUserAPI", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateUser = async (username, password, type) => {
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
    if (!result.data.token) {
      return;
    } else {
      window.localStorage.setItem("token", result.data.token);

      return await me();
    }
  } catch (error) {
    console.error(error);
  }
};

export const me = async () => {
  try {
    const token = window.localStorage.getItem("token");

    if (token) {
      const response = await fetch(`${APIURL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("hey look it is me: ", data);
      return data.username;
    }
    return;
  } catch (error) {
    console.error(error);
  }
};
