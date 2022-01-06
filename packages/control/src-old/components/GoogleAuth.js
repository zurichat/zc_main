import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import { GetUserInfo, BASE_URL } from "@zuri/utilities";

const CLIENT_ID =
  "943002582641-ek6jakave3irmueaqfdoc0754v83qf6e.apps.googleusercontent.com";

const GoogleAuth = ({ className, googleHeader, google, setLoading }) => {
  const history = useHistory();
  const onSuccess = res => {
    if (googleHeader === "Sign up with Google") {
      axios
        .get(`${BASE_URL}/auth/social-login/google/${res.accessToken}`)
        .then(res => {
          const { data } = res.data;
          //Store token in localstorage
          sessionStorage.setItem("token", data.user.token);
          //Store session_id in localstorage
          sessionStorage.setItem("session_id", data.session_id);
          //Store user copy in localstorage
          sessionStorage.setItem("user", JSON.stringify(data.user));
          // $behaviorSubject.next(res.data);
          GetUserInfo();
          history.push("/create-workspace");
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      setLoading(true);
      axios
        .get(`${BASE_URL}/auth/social-login/google/${res.accessToken}`)
        .then(res => {
          const { data } = res.data;
          //Store token in localstorage
          sessionStorage.setItem("token", data.user.token);
          //Store session_id in localstorage
          sessionStorage.setItem("session_id", data.session_id);
          //Store user copy in localstorage
          sessionStorage.setItem("user", JSON.stringify(data.user));
          // $behaviorSubject.next(res.data);
          setTimeout(() => {
            GetUserInfo();
            history.push("/choose-workspace");
            setLoading(false);
          }, 2000);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  const onFailure = res => {
    console.error(`Login Failed:`, res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID
  });

  return (
    <div
      className={className}
      onClick={() => {
        signIn();
      }}
    >
      <a className="google">
        <img src={google} alt="google" />
        {googleHeader}
      </a>
    </div>
  );
};

export default GoogleAuth;
