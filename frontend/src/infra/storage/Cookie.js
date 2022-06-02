import cookie from "js-cookie";

export const CookieStorage = {
  setCookie({ name, value }) {
    cookie.set(name, value, {
      expires: 7,
    });
  },
  getCookie({ name }) {
    return cookie.get(name);
  },
  removeCookie({ name }) {
    cookie.remove(name);
  },
};
