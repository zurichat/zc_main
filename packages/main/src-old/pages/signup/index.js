import React, { useState, useEffect } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import AuthInputBox from "../../components/AuthInputBox";
import FormWrapper from "../../components/AuthFormWrapper";
import styles from "../../component-styles/AuthFormElements.module.css";
import axios from "axios";
import EmailVerification from "./email-verify";
import { Helmet } from "react-helmet";
import "../../i18n";
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom'
// import authBg1 from './assets/auth_bg1.svg'
// import authBg2 from './assets/auth_bg2.svg'
// import authBg3 from './assets/auth_bg3.svg'
// import authBg4 from './assets/auth_bg4.svg'
// import authBg5 from './assets/auth_bg5.svg'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tos, setTos] = useState(false);
  const [error, seterror] = useState("");
  const [nameerror, setnameerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  // Background Images
  // const images = [authBg1, authBg2, authBg3, authBg4, authBg5]
  // const [currentImage, setcurrentImage] = useState(
  //   Math.floor(Math.random() * 4)
  // )

  // To Display Random Aside Background Image
  // const displayImage = () => {
  //   let i = currentImage
  //   i >= images.length - 1 ? (i = 0) : i++
  //   setcurrentImage(i)
  //   console.log(images[i], i)
  // }

  const history = useHistory();

  useEffect(() => {
    const userInfo = sessionStorage.getItem(`user`);
    const redirect = sessionStorage.getItem(`workSpaceInviteRedirect`);

    // if (userInfo && userInfo !== null) history.push(redirect)
  }, [history]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name) {
      setnameerror(`Enter an email address`);
      return;
    } else {
      setnameerror(``);
    }

    if (!password) {
      setpassworderror(`Enter a Password`);
      return;
    } else {
      setpassworderror(``);
    }

    if (!tos) {
      seterror(`You must agree to terms and conditions`);
      return;
    } else {
      seterror(``);
    }

    //Seperate user fullname
    const seperateName = name.split(" ");
    let first_name = "",
      other_name = "";

    seperateName.map((name, index) => {
      if (index === 0) {
        return (first_name += name);
      }
      return (other_name += `${name} `);
    });

    await axios
      .post("https://api.zuri.chat/users", {
        first_name,
        last_name: other_name,
        email,
        password
      })
      .then(response => {
        const { data, message } = response.data;
        // console.log(response.data)
        setShowDialog(true);

        //Store token in localstorage
        sessionStorage.setItem("user_id", data.InsertedId);
        localStorage.setItem("newUserEmail", JSON.stringify(email));
        localStorage.setItem("userUserPassword", JSON.stringify(password));

        //Display message
        // alert(message) //Change this when there is a design

        setTimeout(() => {
          //Redirect to some other page
          // history.push('/create-workspace');
        }, 2000);
      })
      .catch(error => {
        const { data } = error.response;
        setShowDialog(false);

        RegExp(/Users with email/).test(data.message) &&
          setemailerror("This email is already in use");

        !RegExp("Users with email").test(data.message) &&
          seterror(data.message);
      });
  };

  const { t } = useTranslation();

  return (
    <main id={styles.authPageWrapper}>
      {showDialog && <EmailVerification email={email} />}
      {/* <aside id={styles.authAsideContainer} className={styles.display_none}>
        <div id={styles.authImageWrapper}>
          <img src={images[currentImage]} alt="backgroundImage" />
        </div>
      </aside> */}

      <Helmet>
        <title>{t("title")} - Zuri Chat</title>
      </Helmet>
      <section id={styles.authFormContainer}>
        <FormWrapper
          header={t("header")}
          subHeader=""
          googleHeader={t("googleHeader")}
          topLineText={t("topLineText")}
          submitButtonName={t("submitButtonName")}
          disabled={name && email && password && tos}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("bottomLine")}
          bottomLink={t("bottomLink")}
          bottomLinkHref="login"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="name"
            name={t("fullName")}
            type="text"
            placeholder={t("fullNamePlaceholder")}
            value={name}
            setValue={setName}
            // onFocus={displayImage}
            error={nameerror}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name={t("emailAddress")}
            type="email"
            placeholder={t("emailAddressPlaceholder")}
            value={email}
            setValue={setEmail}
            error={emailerror}
            // onFocus={displayImage}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name={t("password")}
            type="password"
            placeholder={t("inputPassword")}
            value={password}
            setValue={setPassword}
            // onFocus={displayImage}
            error={passworderror}
          />
          <div className={`${styles.tos}`}>
            <input
              className={`${styles.checkBox}`}
              name="tos"
              type="checkbox"
              value={tos}
              onClick={() => {
                setTos(!tos);
              }}
              // onFocus={displayImage}
            />
            <span className={`${styles.tosText}`}>
              {t("privacyAgreement")}
              {""}
              <Link to="/terms">
                {t("termsOfService")}
                {""}{" "}
              </Link>
              &
              <Link to="/privacy">
                {" "}
                {""}
                {t("privacy")}
              </Link>
            </span>
          </div>
        </FormWrapper>
      </section>
    </main>
  );
};

export default withRouter(Signup);
