import React, { useRef } from "react";
import useForm from "../use-form-hook";
import styles from "../save-password/SettingsTab.module.css";

const SavePassword = () => {
  const formElement = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const FORM_ENDPOINT = `https://staging.api.zuri.chat/users/${user.id}`;
  const { message, handleSubmit } = useForm({
    form: formElement.current,
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
          <label htmlFor="current_password" className="form-label">
            Current password
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="password" className="form-label">
            New password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4 mb-3 mt-3" id={styles.p_section}>
          <button className="btn" id="submit">
            Save password
          </button>
          <br />
          <p>
            Can’t remember your current password?{" "}
            <span>Reset your password by email</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SavePassword;
