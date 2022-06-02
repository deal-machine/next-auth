import { HttpClient } from "../../infra/httpClient/HttpClient";
import { tokenService } from "../token/tokenService";

export const authService = {
  async login({ username, password }) {
    return HttpClient("http://localhost:4000/api/login", {
      method: "POST",
      body: { username, password },
    }).then(({ body, ok }) => {
      if (!ok) throw new Error("Username or password is invalid");

      tokenService.save(body.data.access_token);
    });
  },
};
