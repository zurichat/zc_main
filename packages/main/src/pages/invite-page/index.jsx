import { withRouter, useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { BASE_API_URL } from "@zuri/utilities";
import logo from "../../assets/zuri-chat-logo/logo-title.svg";
import axios from "axios";
import { Helmet } from "react-helmet";
import AuthInputBox from "../../components/form/AuthInputBox";
import Button from "../reset-password/components/Button";
import { isMobile } from "react-device-detect";

const InvitePage = () => {
  const { id: inviteId } = useParams();
  // console.log(inviteId)
  const history = useHistory();
  const [registerNewUser, setRegisterNewUser] = useState(false);
  const [userPasswordValue, setUserPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // check if user has a zuri account
  const handleJoinWorkspace = async () => {
    try {
      // user exist on zuri chat
      const { data } = await axios.get(
        `${BASE_API_URL}/organizations/invites/${inviteId}`
      );
      console.log(data);
      addUserToOrganization();
    } catch ({ message }) {
      // user does not exist on zuri chat
      console.error("handleJoinWorkspace-err", message);
      setRegisterNewUser(true);
    }
  };

  // create a new user
  const registerNewUserHandler = async () => {
    try {
      const { data } = await axios.post(`${BASE_API_URL}/guests/invite`, {
        uuid: inviteId,
        password: userPasswordValue
      });
      console.log(data);
      addUserToOrganization();
    } catch ({ message }) {
      console.error("registerNewUserHandler-err", message);

      //If the UUID does not tally with what was sent
      setRegisterNewUser(true);
    }
  };

  //Function to continue to mobile app or not
  const ContinueToMobile = () => {
    if (confirm("Continue to Mobile")) {
      history.replace("/mobile");
    } else {
      history.replace("/login");
    }
  };

  // add user to the organization
  const addUserToOrganization = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_API_URL}/organizations/guests/${inviteId}`,
        {}
      );
      console.log(data);
      //Redirect to login if the user is not on mobile
      if (!isMobile) {
        history.replace("/login");
        return;
      }
      // ContinueToMobile();
    } catch ({ message }) {
      console.error("addUserToOrganization-err", message);
      history.replace("/login");
    }
  };

  const validatePasswords = () => {
    if (userPasswordValue.length < 9) {
      setUserPasswordError("Password must be 9 or more characters");
      return false;
    }
    if (confirmPassword !== userPasswordValue) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }

    return true;
  };

  return (
    <main className="container  my-5 py-5 w-75">
      <Helmet>
        <title>InviteScreen - Zuri Chat</title>
      </Helmet>
      <div className={`text-center`}>
        <img src={logo} width="150" alt="zuri" />
      </div>
      <div className="border p-3">
        <h3 className={`text-center`}>You have been invited to a Workspace</h3>

        {registerNewUser && (
          <>
            <p className={`text-center`}>Welcome to Zuri Chat</p>

            <p className={`text-center`} style={{ color: "#00b87c" }}>
              Kindly input your password to SignUp
            </p>
            <AuthInputBox
              className={``}
              id="password"
              name="Password"
              type="password"
              placeholder="Enter a password"
              value={userPasswordValue}
              setValue={setUserPasswordValue}
              error={userPasswordError}
            />
            <AuthInputBox
              className={``}
              id="confirmpassword"
              name="Confirm Password"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              error={confirmPasswordError}
            />
          </>
        )}
        <div className="text-center d-flex">
          <Button
            className=" flex-grow-1"
            onClick={() => {
              setConfirmPasswordError("");
              setUserPasswordError("");
              console.log("herre");

              if (registerNewUser) {
                if (validatePasswords()) {
                  registerNewUserHandler();
                }
              } else {
                handleJoinWorkspace();
              }
            }}
            disabled={registerNewUser && !userPasswordValue && !confirmPassword}
            data-cy="join_workspace_button"
          >
            Join?
          </Button>
        </div>
      </div>
    </main>
  );
};

export default withRouter(InvitePage);
