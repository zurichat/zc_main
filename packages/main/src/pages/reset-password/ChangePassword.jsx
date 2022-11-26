import React, { useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { AuthInputBox, AuthFormWrapper } from "../../components";
import styles from "../login/Login.module.css";
import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import PasswordSuccesful from "./components/PasswordSuccesful";
import { useTranslation } from "react-i18next";

const NewPassword = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const resetCode = query.get("code");

  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [confirm_password, setcPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState("");
  const open = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const updatepass = async () => {
    try {
      const res = await axios.post(
        `${BASE_API_URL}/account/update-password/${resetCode}`,
        {
          password,
          confirm_password
        }
      );

      console.log(res.data, "here");
      setError("");
      open();
    } catch (err) {
      open();
      setError("Error!!!!, Please try again later");
      console.error(err);
    }
  };

  const validatePassword = password => {
    // console.log(password)
    if (password?.toString().length < 9)
      return " Password must be 9 or more characters long";
  };

  const validatecPassword = (password, confirm_password) => {
    // console.log(password)
    if (password !== confirm_password) return "Passwords don't match";
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      validatePassword(password) ||
      validatecPassword(password, confirm_password)
    ) {
      let err = "";
      if (validatePassword(password)) {
        err = validatePassword(password);
        setError(err);
      }
      if (validatecPassword(password, confirm_password)) {
        err = validatecPassword(password, confirm_password);
        setError(err);
      }
    } else {
      setError("");
      updatepass();
    }
  };

  return (
    <div id={styles.authPageWrapper}>
      {showDialog && (
        <PasswordSuccesful error={error} closeDialog={closeDialog} />
      )}

      <section id={styles.authFormContainer}>
        <AuthFormWrapper
          header={t("auth.newPassword.headline")}
          subHeader={t("auth.newPassword.post_headline")}
          submitButtonName={t(
            "auth.verifyCodeOnPasswordReset.success.continueButton"
          )}
          disabled={!(password && confirm_password)}
          error={error}
          handleSubmit={handleSubmit}
          bottomLine={t("logInbottomLine")}
          bottomLink={t("logInbottomLink")}
          bottomLinkHref="Signup"
          setLoading={false}
          showGoogleAuth={false}
        >
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="password"
            name={t("auth.newPassword.form.password")}
            type="password"
            placeholder={t("auth.newPassword.form.password")}
            value={password}
            setValue={setPassword}
            // error={error}
          />

          <AuthInputBox
            className={`${styles.inputElement}`}
            id="confirm_password"
            name={t("auth.newPassword.form.confirmPassword")}
            type="password"
            placeholder={t("auth.newPassword.form.confirmPassword")}
            value={confirm_password}
            setValue={setcPassword}
            // error={error}
          />

          <br />
        </AuthFormWrapper>
      </section>
    </div>
  );
};

export default withRouter(NewPassword);
