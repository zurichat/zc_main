import { withRouter, useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/Signout.module.css";
import logo from "../../assets/zuri-chat-logo/logo-title.svg";
import axios from "axios";
import { Helmet } from "react-helmet";
import AuthInputBox from "./components/AuthInputBox";
import { isMobile } from "react-device-detect";

const InvitePage = () => {
  const { id: inviteId } = useParams();
  // console.log(inviteId)
  const history = useHistory();
  const [registerNewUser, setRegisterNewUser] = useState(false);
  const [userPasswordValue, setUserPasswordValue] = useState("");

  // check if user has a zuri account
  const handleJoinWorkspace = async () => {
    try {
      // user exist on zuri chat
      const { data } = await axios.get(
        `https://api.zuri.chat/organizations/invites/${inviteId}`
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
      const { data } = await axios.post("https://api.zuri.chat/guests/invite", {
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
        `https://api.zuri.chat/organizations/guests/${inviteId}`,
        {}
      );
      console.log(data);
      //Redirect to login if the user is not on mobile
      if (!isMobile) {
        history.replace("/login");
        return;
      }
      ContinueToMobile();
    } catch ({ message }) {
      console.error("addUserToOrganization-err", message);
      history.replace("/login");
    }
  };

  return (
    <main id={styles.signout}>
      <Helmet>
        <title>InviteScreen - Zuri Chat</title>
      </Helmet>
      <div className={styles.logo}>
        <img src={logo} alt="zuri" />
      </div>
      <div className={styles.write}>
        <div className={styles.wrapper}>
          <>
            <h5 className={styles.secondText}>
              You have been invited to a Workspace
            </h5>
            {registerNewUser && (
              <AuthInputBox
                className={`${styles.inputElement}`}
                id="password"
                name="Password"
                type="password"
                placeholder="Enter a password"
                value={userPasswordValue}
                setValue={setUserPasswordValue}
                error={""}
              />
            )}
            <button
              onClick={() => {
                if (registerNewUser) {
                  registerNewUserHandler();
                } else {
                  handleJoinWorkspace();
                }
              }}
              // onClick={() => history.push('/signup')}
              className={styles.button}
              disabled={registerNewUser && !userPasswordValue}
            >
              Join?
            </button>
          </>
        </div>
      </div>
    </main>
  );
};

export default withRouter(InvitePage);
