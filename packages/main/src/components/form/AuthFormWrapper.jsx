import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import GoogleAuth from "../google-auth";
import styles from "./AuthFormWrapper.module.css";

import GoogleIcon from "../../assets/social-icons/google.svg";
import ZuriChatLogoTitle from "../../assets/zuri-chat-logo/logo-title.svg";

const FormWrapper = ({
  children,
  header,
  subHeader,
  googleHeader,
  topLineText,
  submitButtonName,
  error,
  disabled,
  handleSubmit,
  bottomLine,
  bottomLink,
  bottomLinkHref,
  setLoading,
  showGoogleAuth = true
}) => {
  const { t } = useTranslation();
  return (
    <section className={`${styles.container}`}>
      <Link to="/">
        <div className={`${styles.logo}`}>
          <img src={ZuriChatLogoTitle} alt="zuri" />
        </div>
      </Link>
      <div className={styles.FormWrapper}>
        <div className={`${styles.headers}`}>
          <h1 className={`${styles.header}`}>{header}</h1>
          <p className={`${styles.subHeader}`}>{subHeader}</p>
        </div>
        {showGoogleAuth && (
          <div className={`${styles.googleAuthDiv}`}>
            <GoogleAuth
              className={`${styles.googleBtn}`}
              googleHeader={googleHeader}
              google={GoogleIcon}
              setLoading={setLoading}
            />
            <span className={`${styles.hrWrapper}`}>
              <hr className={`${styles.hrLeft}`} />
              <div>{topLineText}</div>
              <hr className={`${styles.hrRight}`} />
            </span>
          </div>
        )}
        {error && (
          <div className={`${styles.errWrapper}`}>
            <RiErrorWarningLine />
            <div>{error}</div>
          </div>
        )}
        <form
          className={`${styles.form}`}
          onSubmit={handleSubmit}
          method="post"
          action=""
        >
          <div className={`${styles.inputSection}`}>{children}</div>

          <div className={`${styles.btnContainer}`}>
            <button
              disabled={disabled}
              className={`${styles.btn}`}
              value="submit"
              type="submit"
              data-cy="auth_form_submit_button"
            >
              {submitButtonName}
            </button>
          </div>

          <div
            className={`${styles.bottomLine}`}
            style={{ paddingTop: "20px" }}
          >
            <span>
              {bottomLine}{" "}
              <Link
                className={`${styles.bottomLink}`}
                to={`/${bottomLinkHref}`}
              >
                {bottomLink}
              </Link>
            </span>
          </div>
        </form>
      </div>

      <div className={`${styles.footer}`}>
        <Link to="/contact-us" className={`${styles.footer_a}`}>
          {t("contactUs")}
        </Link>
        <Link to="/legal" className={`${styles.footer_a}`}>
          {t("legacyPolicy")}
        </Link>
        <Link to="/about" className={`${styles.footer_a}`}>
          {t("aboutZuri")}
        </Link>
      </div>
    </section>
  );
};

export default FormWrapper;
