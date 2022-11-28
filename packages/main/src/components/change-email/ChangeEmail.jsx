import React, { useRef } from "react";
import useForm from "../use-form-hook";
import styles from "../change-email/SettingsTab.module.css";

const ChangeEmail = () => {
  const formElement = useRef(null);
  const user = sessionStorage.getItem(`user`);
  const FORM_ENDPOINT = `https://staging.api.zuri.chat/users/${user.id}`;
  const { message, handleSubmit } = useForm({
    form: formElement,
    options: {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      }
    },
    endpointUrl: FORM_ENDPOINT
  });

  /* TODO: Display message after form submission */

  return (
    <div className={styles.passwordsection}>
      <form
        className="row d-flex flex-column"
        ref={formElement}
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
      >
        <div className="col-md-5">
          <label htmlFor="current_email" className="form-label">
            Current Email
          </label>
          <input
            id="current_email"
            name="current_email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="email" className="form-label">
            New email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4 mb-3 mt-3">
          <button className="btn" id="submit">
            Update email address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
