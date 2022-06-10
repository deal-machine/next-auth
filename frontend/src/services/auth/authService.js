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
  async getSession(token) {
    const accessToken = token ? token.ACCESS_TOKEN_KEY : tokenService.get();
    return HttpClient("http://localhost:4000/api/session", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(({ body: { data }, ok }) => {
      if (!ok) {
        tokenService.delete();
        throw new Error("Not Authorized");
      }

      return { session: data };
    });
  },
};
