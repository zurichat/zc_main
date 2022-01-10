import React, { useState } from "react";
import Logo from "../../assets/zuri-chat-logo/logo-title.svg";
import { withRouter, useLocation } from "react-router-dom";
import { BASE_URL } from "@zuri/utilities";
import AuthInputBox from "../InvitePage/components/AuthInputBox";
import styles from "./styles/ResetPassword.module.css";
import Button from "./components/Button";
import axios from "axios";
import PasswordSuccesful from "./PasswordSuccesful";
import { useTranslation } from "react-i18next";
import { RiErrorWarningLine } from "react-icons/ri";

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
        `${BASE_URL}/account/update-password/${resetCode}`,
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

  const handleSubmit = e => {
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
    <main className="container p-5 " style={{ width: "50vw" }}>
      {showDialog && (
        <PasswordSuccesful error={error} closeDialog={closeDialog} />
      )}

      <section className="">
        {/* logo div  */}
        <div className={`text-center pb-3 mb-3 mt-0 pt-0`}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={``}>
          <h4 className={styles.headerText}>
            {t("auth.newPassword.headline")}
          </h4>
          <p className="text-center">{t("auth.newPassword.post_headline")}</p>
        </div>
        {/* form section  */}
        <form action="">
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
          {error && (
            <div className={`d-flex text-danger `}>
              <RiErrorWarningLine className="my-2" />
              <div className="mx-2 mt-1">{error}</div>
            </div>
          )}
          <Button className={styles.button} onClick={handleSubmit}>
            {t("auth.verifyCodeOnPasswordReset.success.continueButton")}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default withRouter(NewPassword);
