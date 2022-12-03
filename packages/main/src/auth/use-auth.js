import { BASE_API_URL, deleteAllUtilitiesCache } from "@zuri/utilities";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  let userToSet = null;
  const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
  const userTokenFromStorage = sessionStorage.getItem("token");
  if (userFromStorage && userTokenFromStorage) {
    userToSet = { ...userFromStorage };
  }
  const [user, setUser] = useState(userToSet);

  const handleSocialSetUser = socialUser => {
    setUser(socialUser);
  };

  // ... to save the user to state.
  const signin = async (email, password) => {
    const response = await axios.post(`${BASE_API_URL}/auth/login`, {
      email,
      password
    });
    const { data } = response.data;
    const fetchUserWorkspacesResponse = await axios.get(
      `${BASE_API_URL}/users/${data.user.email}/organizations`,
      {
        headers: {
          Authorization: `Bearer ${data.user.token}`
        }
      }
    );
    const userWorkspaces = fetchUserWorkspacesResponse.data.data;
    setUser(data.user);
    return { ...data, userWorkspaces };
  };
  //   const signup = async signupData => {
  //     const response = await axios.post(
  //       `${BASE_URL}/users`,
  //       signupData
  //     );
  //     const { data } = response.data;
  //   };
  const sendSignupVerificationCode = async signupData => {
    const response = await axios.post(`${BASE_API_URL}/users`, signupData);
    // console.log("sendSignupVerificationCode-response", response.data);
    if (response.data.status === 400) {
      throw new Error(response.data.message);
    } else {
      return response.data.data;
    }
  };
  const confirmSignupVerificationCode = async code => {
    const response = await axios.post(
      `${BASE_API_URL}/account/verify-account`,
      {
        code
      }
    );
    return response;
  };
  const signout = async token => {
    await deleteAllUtilitiesCache();
    const lastLocation = localStorage.getItem("lastLocation");
    localStorage.clear();
    if (lastLocation) {
      window.localStorage.setItem("lastLocation", lastLocation);
    }
    sessionStorage.clear();
    axios.post(
      `${BASE_API_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    setUser(null);
    return true;
  };
  const sendPasswordResetEmail = email => {
    return true;
  };
  const confirmPasswordReset = (code, password) => {
    return true;
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userToken = sessionStorage.getItem("token");
    if (user && userToken) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);
  // Return the user object and auth methods
  return {
    user,
    handleSocialSetUser,
    signin,
    sendSignupVerificationCode,
    confirmSignupVerificationCode,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}
