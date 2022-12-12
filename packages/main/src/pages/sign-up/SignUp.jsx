import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import styles from "./SignUp.module.css";
import {
  AuthInputBox,
  AuthFormWrapper,
  EmailVerificationModal
} from "../../components";
import { useAuth } from "../../auth/use-auth";

export default function Index() {
  const { t } = useTranslation();
  const auth = useAuth();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [tos, setTos] = React.useState(false);
  const [error, seterror] = React.useState("");
  const [nameerror, setnameerror] = React.useState("");
  const [passworderror, setpassworderror] = React.useState("");
  const [emailerror, setemailerror] = React.useState();
  const [showDialog, setShowDialog] = React.useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name) {
      setnameerror(`signup_enterEmailAddress`);
      return;
    } else {
      setnameerror(``);
    }

    if (!password) {
      setpassworderror(`${t("input_password")}`);
      return;
    } else {
      setpassworderror(``);
    }

    if (!tos) {
      seterror(`${t("signup_agreeCondition")}`);
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
    auth
      .sendSignupVerificationCode({
        first_name,
        last_name: other_name,
        email,
        password
      })
      .then(res => {
        setShowDialog(true);

        //Store token in localstorage
        sessionStorage.setItem("user_id", res.InsertedId);
      })
      .catch(error => {
        let errorMessage = "";
        if (error.response) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.message;
        }
        setShowDialog(false);

        if (RegExp(/User with email/i).test(errorMessage)) {
          setemailerror(`${t("signup_already_email")}`);
          seterror(errorMessage);
        }
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
          googleHeader={t("google_header")}
          topLineText={t("top_line_text")}
          submitButtonName={t("submit_button_name")}
          disabled={!(name && email && password && tos)}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("bottom_line")}
          bottomLink={t("bottom_link")}
          bottomLinkHref="login"
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="name"
            name={t("full_name")}
            type="text"
            placeholder={t("full_name_placeholder")}
            value={name}
            setValue={setName}
            // onFocus={displayImage}
            error={nameerror}
          />
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name={t("email_address")}
            type="email"
            placeholder={t("email_address_placeholder")}
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
            placeholder={t("input_password")}
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
              data-cy="auth_form_agreement_checkbox"
              onClick={() => {
                setTos(!tos);
              }}
              // onFocus={displayImage}
            />
            <span className={`${styles.tosText}`}>
              {t("privacy_agreement")}
              {""}
              <Link to="/terms">
                {t("terms_of_service")}
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
