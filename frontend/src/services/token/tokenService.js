import { CookieStorage } from "../../infra/storage/Cookie";

const ACCESS_TOKEN = "ACCESS_TOKEN_KEY";

export const tokenService = {
  save(token) {
    CookieStorage.setCookie({ name: ACCESS_TOKEN, value: token });
  },
  get() {
    return CookieStorage.getCookie({ name: ACCESS_TOKEN });
  },
  delete() {
    CookieStorage.removeCookie({ name: ACCESS_TOKEN });
  },
};
