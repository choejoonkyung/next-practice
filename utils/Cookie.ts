class Cookie {
  static create(name: string, value: string, days = 1) {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();

    document.cookie = `${name}=${value}; ${
      days ? ` expires=${expires};` : ""
    } path=/`;
  }

  static remove(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static read(name: string) {
    const results = document.cookie.match(
      "(^|;) ?" + name + "=([^;]*)(;|$)"
    ) as RegExpMatchArray;

    return results[2] ?? "";
  }
}

export default Cookie;
