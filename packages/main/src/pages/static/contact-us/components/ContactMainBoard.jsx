import React, { useEffect, useState } from "react";
import contactStyle from "./ContactMainBoard.module.css";
import { useTranslation } from "react-i18next";
import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";

const ContactMainBoard = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    email: "",
    message: "",
    subject: "Subject",
    content: "Content",
    errors: {
      email: "",
      message: ""
    },
    loading: false,
    errorMessage: "",
    successMessage: ""
  });

  const formLogic = values => {
    let error = {};
    if (!values.email) {
      error.email = `${t("contact_blankEmail")}`;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      error.email = `${t("Contact_invalidEmail")}`;
    }

    if (!values.message) {
      error.message = `${t("contact_blankMessage")}`;
    }

    return error;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormValues({ ...formValues, errors: formLogic(formValues) });
  };

  const submitForm = async data => {
    setFormValues({ ...formValues, loading: true });
    let contactData = new FormData();
    formValues.email && contactData.append("email", formValues.email);
    formValues.message && contactData.append("message", formValues.message);
    formValues.subject && contactData.append("subject", formValues.subject);
    formValues.content && contactData.append("content", formValues.content);
    axios
      .post(`${BASE_API_URL}/contact`, contactData)
      .then(() => {
        setFormValues(formValues => ({
          ...formValues,
          email: "",
          message: "",
          errorMessage: "",
          successMessage: `${t("contact_successfulmessage")}`,
          loading: false
        }));
        setTimeout(() => {
          setFormValues(formValues => ({
            ...formValues,
            errorMessage: "",
            successMessage: ""
          }));
        }, 1000);
      })
      .catch(e => {
        setFormValues(formValues => ({
          ...formValues,
          errorMessage: `${t("Contact_messageAsk")}`,
          successMessage: "",
          loading: false
        }));
        setTimeout(() => {
          setFormValues(formValues => ({
            ...formValues,
            errorMessage: "",
            successMessage: ""
          }));
        }, 1000);
      });
  };

  useEffect(() => {
    if (Object.keys(formValues.errors).length === 0) {
      submitForm(formValues);
    }
  }, [formValues.errors]);

  return (
    <div className={contactStyle.contactMainBoardContainer}>
      <div className={contactStyle.contactMainBoardInnerContainer}>
        <p className={contactStyle.contactTitle}>{t("contactHead")}</p>
        <div className={contactStyle.messageContainer}>
          {formValues.errorMessage ? (
            <span className={contactStyle.errorMessage}>
              {formValues.errorMessage}
            </span>
          ) : null}
          {formValues.successMessage ? (
            <span className={contactStyle.successMessage}>
              {formValues.successMessage}
            </span>
          ) : null}
        </div>

        <form className={contactStyle.contactFormContainer}>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="email">{t("formEmail")}</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              onChange={e =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              value={formValues.email}
              placeholder={t("Contact_emailExample")}
            />
            <small>{formValues.errors?.email}</small>
          </div>

          <div className={contactStyle.inputGroup}>
            <label htmlFor="message">{t("Contact_messageAsk")}</label>
            <textarea
              required
              name="message"
              id="message"
              onChange={e =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              value={formValues.message}
              placeholder={t("anyTopic")}
            />
            <small>{formValues.errors?.message}</small>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className={contactStyle.contactBtn}
            >
              {formValues.loading
                ? `${t("Contact_loadingText")}`
                : `${t("getHelp")}`}
            </button>
          </div>
        </form>
        <div className={contactStyle.privacyPolicy}>
          <a href="/privacy">{t("privacy")}</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMainBoard;
