import { HttpClient } from "../../infra/httpClient/HttpClient";

export const authService = {
  async login({ username, password }) {
    return HttpClient("http://localhost:4000/api/login", {
      method: "POST",
      body: { username, password },
    }).then((resp) => {
      if (!resp.ok) throw new Error("Username or password is invalid");

      console.log(resp.body);
    });
  },
};
