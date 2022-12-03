import React, { useEffect, useState } from "react";
import contactStyle from "./ContactMainBoard.module.css";

import { BASE_API_URL } from "@zuri/utilities";
import axios from "axios";

const ContactMainBoard = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
    subject: "Subject",
    content: "Content",
    errors: {
      name: "",
      email: "",
      phoneNo: "",
      message: ""
    },
    loading: false,
    errorMessage: "",
    successMessage: ""
  });

  const formLogic = values => {
    let error = {};
    if (!values.name) {
      error.name = "Please type in your full name";
    }

    if (!values.email) {
      error.email = "Please type in an email";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      error.email = "Email is invalid.";
    }

    if (!values.phoneNo) {
      error.phoneNo = "Please type in a phone number";
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
    console.log(data);
    setFormValues({ ...formValues, loading: true });
    let contactData = new FormData();
    formValues.name && contactData.append("name", formValues.name);
    formValues.email && contactData.append("email", formValues.email);
    formValues.phoneNo && contactData.append("phoneNo", formValues.phoneNo);
    formValues.message && contactData.append("message", formValues.message);
    formValues.subject && contactData.append("subject", formValues.subject);
    formValues.content && contactData.append("content", formValues.content);
    axios
      .post(`${BASE_API_URL}/contact`, contactData)
      .then(({ data }) => {
        console.log({ data });
        setFormValues(formValues => ({
          ...formValues,
          name: "",
          email: "",
          phoneNo: "",
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
        console.log({ e });
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
        <div className={contactStyle.contactMainBoardTitleContainer}>
          <h1>Contact Us</h1>
          <p>
            Let us know how we can help. We will respond as soon as possible!
          </p>
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
        </div>

        <form className={contactStyle.contactFormContainer}>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              required
              name="name"
              id="fullName"
              type="text"
              onChange={e =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              value={formValues.name}
              placeholder="Enter your First and Last Name"
            />
            <small>{formValues.errors?.name}</small>
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              onChange={e =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              value={formValues.email}
              placeholder="Type your email here"
            />
            <small>{formValues.errors?.email}</small>
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              required
              name="phoneNo"
              id="phoneNumber"
              type="phone"
              onChange={e =>
                setFormValues({ ...formValues, phoneNo: e.target.value })
              }
              value={formValues.phoneNo}
              placeholder="Type your phone number here"
            />
            <small>{formValues.errors?.phoneNo}</small>
          </div>
          <div className={contactStyle.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              required
              name="message"
              id="message"
              onChange={e =>
                setFormValues({ ...formValues, message: e.target.value })
              }
              value={formValues.message}
              placeholder="Type your message here"
            />
            <small>{formValues.errors?.message}</small>
          </div>
          <div className={contactStyle.inputGroupCheckBox}>
            <input required id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">I will like to recieve your news</label>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className={contactStyle.contactBtn}
            >
              {formValues.loading ? "Loading..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMainBoard;
