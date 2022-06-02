export const authService = {
  async login({ username, password }) {
    fetch("http://localhost:4000/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((resp) => {
      console.log(resp);
      if (!resp.ok) throw new Error("Username or password is invalid");

      console.log(resp.body);
    });
  },
};
