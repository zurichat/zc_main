import { useState } from "react";
import styles from "../login/Login.module.css";
import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";
import VerifyResetCode from "./components/VerifyCode";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { AuthInputBox, AuthFormWrapper } from "../../components";

const ResetDefault = () => {
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState(false);
  const open = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const sendEmail = async () => {
    if (email) {
      try {
        const res = await axios.post(
          `${BASE_API_URL}/account/request-password-reset-code`,
          {
            email
          }
        );
        open();
        console.log(res.data);
      } catch (err) {
        setError("Error!!!. Mail not sent, please try again shortly ");
        console.error(err);
      }
    }
  };

  const validateEmail = value => {
    let error = "";
    let re1 =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re1.test(value)) {
      error = "Invalid email address";
      setError(error);
    }
    return error;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateEmail(email)) {
      sendEmail();
    }
  };

  const { t } = useTranslation();

  return (
    <div id={styles.authPageWrapper}>
      <Helmet>
        <title>{t("auth.passwordreset.title")} - Zuri Chat</title>
      </Helmet>
      {showDialog && (
        <VerifyResetCode
          label={t("auth.verifyCodeOnPasswordReset.header")}
          closeDialog={closeDialog}
        />
      )}
      <section id={styles.authFormContainer}>
        <AuthFormWrapper
          header={t("auth.passwordreset.headline")}
          subHeader={t("auth.passwordreset.post_headline")}
          submitButtonName={t("auth.passwordreset.form.continueButton")}
          disabled={!email}
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
            id="email"
            name={t("auth.passwordreset.form.emailAddress")}
            type="email"
            placeholder="markzuri@example.com"
            value={email}
            setValue={setEmail}
            error=""
          />
          <br />
        </AuthFormWrapper>
      </section>
    </div>
  );
};

export default ResetDefault;
