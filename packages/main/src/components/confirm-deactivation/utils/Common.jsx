// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

export const getUser = () => {
  const result = JSON.parse(sessionStorage.getItem("user") || null);
  return result;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("session_id");
};

// ================================================

// The section of the password length
export const isLength = password => {
  if (password.length < 6) return true;
  return false;
};

// The section of the confirm password
export const isMatch = (password, cfpassword) => {
  if (password === cfpassword) return true;
  return false;
};
