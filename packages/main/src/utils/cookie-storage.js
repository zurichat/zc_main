export default {
  getItem: key => {
    const cookies = document.cookie
      .split(";")
      .map(cookie => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value, age) => {
    document.cookie = `${key}=${value}; max-age=${age}`;
  }
};
