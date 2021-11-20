import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import styles from "./SignUp.module.css";
import {
  AuthInputBox,
  AuthFormWrapper,
  EmailVerificationModal
} from "../../components";

export default function Index() {
  const { t } = useTranslation();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [tos, setTos] = React.useState(false);
  const [error, seterror] = React.useState("");
  const [nameerror, setnameerror] = React.useState("");
  const [passworderror, setpassworderror] = React.useState("");
  const [emailerror, setemailerror] = React.useState("");
  const [showDialog, setShowDialog] = React.useState(false);

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

        // setTimeout(() => {
        //   //Redirect to some other page
        //   // history.push('/create-workspace');
        // }, 2000);
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
  return (
    <main id={styles.authPageWrapper}>
      {showDialog && <EmailVerificationModal email={email} />}

      <Helmet>
        <title>{t("title")} - Zuri Chat</title>
      </Helmet>

      <section id={styles.authFormContainer}>
        <AuthFormWrapper
          header={t("header")}
          subHeader=""
          googleHeader={t("googleHeader")}
          topLineText={t("topLineText")}
          submitButtonName={t("signUpsubmitButtonName")}
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
        </AuthFormWrapper>
      </section>
    </main>
  );
}
