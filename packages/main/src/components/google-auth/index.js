import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import {useNavigate} from "react-router-dom"
import { useGoogleLogin } from "react-google-login";
import { getUserInfo, BASE_API_URL } from "@zuri/utilities";
import { useAuth } from "../../auth/use-auth";

const CLIENT_ID =
  "943002582641-ek6jakave3irmueaqfdoc0754v83qf6e.apps.googleusercontent.com";
const GoogleAuth = ({ className, googleHeader, google, setLoading }) => {
  const history = useHistory();
  // const navigate = useNavigate()
  let auth = useAuth();
  const onSuccess = res => {
    if (googleHeader === "Sign up with Google") {
      axios
        .get(`${BASE_API_URL}/auth/social-login/google/${res.accessToken}`)
        .then(res => {
          const { data } = res.data;
          auth.handleSocialSetUser(data.user);
          //Store token in localstorage
          sessionStorage.setItem("token", data.user.token);
          //Store session_id in localstorage
          sessionStorage.setItem("session_id", data.session_id);
          //Store user copy in localstorage
          sessionStorage.setItem("user", JSON.stringify(data.user));
          getUserInfo();
          history.push("/choose-workspace");
          // navigate("/choose-workspace");
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      setLoading(true);
      axios
        .get(`${BASE_API_URL}/auth/social-login/google/${res.accessToken}`)
        .then(res => {
          const { data } = res.data;
          auth.handleSocialSetUser(data.user);
          //Store token in localstorage
          sessionStorage.setItem("token", data.user.token);
          //Store session_id in localstorage
          sessionStorage.setItem("session_id", data.session_id);
          //Store user copy in localstorage
          sessionStorage.setItem("user", JSON.stringify(data.user));

          getUserInfo();
          history.push("/create-workspace");
          // navigate("/create-workspace")
          setLoading(false);
          console.log(data.user);
        })
        // setTimeout(() => {
        //   getUserInfo();
        //   history.push("/choose-workspace");
        //   setLoading(false);
        // }, 2000);
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
      <a className="google" style={{ textDecoration: "none" }}>
        <img src={google} alt="google" />
        {googleHeader}
      </a>
    </div>
  );
};
export default GoogleAuth;
