import { useState } from "react";
import Logo from "../../assets/zuri-chat-logo/logo-title.svg";
import AuthInputBox from "../InvitePage/components/AuthInputBox";
import Button from "./components/Button";
import styles from "./styles/ResetPassword.module.css";
import axios from "axios";
import VerifyResetCode from "./VerifyCode";
import { Helmet } from "react-helmet";
import { RiErrorWarningLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

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
          "https://api.zuri.chat/account/request-password-reset-code",
          {
            email
          }
        );
        open();
        console.log(res.data);
      } catch (err) {
        setError("Error!!! email not sent,please try again shortly ");
        console.error(err);
      }
    }
  };

  const validateEmail = value => {
    let error = "";
    let re1 =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re2 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;
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
    <div className="container p-5 " style={{ width: "55vw" }}>
      <Helmet>
        <title>{t("auth.passwordreset.title")} - Zuri Chat</title>
      </Helmet>
      {showDialog && (
        <VerifyResetCode
          label={t("auth.verifyCodeOnPasswordReset.header")}
          closeDialog={closeDialog}
        />
      )}
      <section className={`${styles.getHelpSigninForm} `}>
        {/* logo div  */}
        <div className={`${styles.logoFormContainer} mb-3 pb-2`}>
          <img className={styles.logo} src={Logo} alt="" />
        </div>
        {/* header text  */}
        <div className={`mb-3 pb-3`}>
          <h4 className={styles.headerText}>
            {t("auth.passwordreset.headline")}
          </h4>
          <p className={`${styles.headerTextTitle}`}>
            {t("auth.passwordreset.post_headline")}
          </p>
        </div>
        {/* form section  */}
        <form action="">
          <AuthInputBox
            className={`${styles.inputElement}`}
            id="email"
            name={t("auth.passwordreset.form.emailAddress")}
            type="email"
            placeholder="Johndoe@example.com"
            value={email}
            setValue={setEmail}
            error=""
          />
          {error && (
            <div className={`d-flex text-danger `}>
              <RiErrorWarningLine className="my-2" />
              <div className="mx-2 mt-1">{error}</div>
            </div>
          )}
          <Button className={`${styles.button} mb-5`} onClick={handleSubmit}>
            {t("auth.passwordreset.form.continueButton")}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ResetDefault;
