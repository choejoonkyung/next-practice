import Cookies, { CookieAttributes } from "js-cookie";

class Cookie {
  static create(name: string, value: string, opt?: CookieAttributes, days = 1) {
    Cookies.set(name, value, {
      ...opt,
      expires: days,
    });
  }

  static remove(name: string) {
    Cookies.remove(name);
  }

  static read(name: string) {
    return Cookies.get(name);
  }
}

export default Cookie;
