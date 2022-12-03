import React, { useEffect, useState } from "react";
import contactStyle from "./ContactMainBoard.module.css";

import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";

const ContactMainBoard = () => {
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
      error.email = "Please type in an email";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      error.email = "Email is invalid.";
    }

    if (!values.message) {
      error.message = "Please type in a message";
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
          successMessage: "Contact information sent successfully",
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
          errorMessage: "Error sending details pls try again",
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
        <p className={contactStyle.contactTitle}>Contact Us</p>
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
            <label htmlFor="email">Your Email Address</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              onChange={e =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              value={formValues.email}
              placeholder="You@example.com"
            />
            <small>{formValues.errors?.email}</small>
          </div>

          <div className={contactStyle.inputGroup}>
            <label htmlFor="message">Tell us what you need help with:</label>
            <textarea
              required
              name="message"
              id="message"
              onChange={e =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              value={formValues.message}
              placeholder="Enter any topic"
            />
            <small>{formValues.errors?.message}</small>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className={contactStyle.contactBtn}
            >
              {formValues.loading ? "Loading..." : "GET HELP"}
            </button>
          </div>
        </form>
        <div className={contactStyle.privacyPolicy}>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMainBoard;
