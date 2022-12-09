import React, { useRef, useState } from "react";
import styles from "../save-password/SettingsTab.module.css";
import { BASE_API_URL } from "@zuri/utilities";

let errorOut = null;

const SavePassword = () => {
  const formElement = useRef(null);
  const [state, setState] = useState({ status: "idle", message: null });
  const user = JSON.parse(sessionStorage.getItem("user"));
  const FORM_ENDPOINT = `${BASE_API_URL}/users/${user.id}`;

  const checkPassword = async password => {
    const confirmPassword = {
      password,
      confirm_password: password
    };
    const response = await fetch(`${BASE_API_URL}/auth/confirm-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(confirmPassword)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return "success";
  };

  const handleSubmit = e => {
    e.preventDefault();

    clearTimeout(errorOut);

    setState({ status: "loading", message: "Please wait..." });

    const form = formElement.current;

    const data = Array.from(form.elements)
      .filter(input => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    checkPassword(data.current_password)
      .then(response => {
        /* TODO SEND REQUEST TO CHANGE USERS PASSWORD */

        setState({
          status: "info",
          message: "Change Password feature is currently unavailable"
        });
      })
      .catch(err => {
        setState({ status: "error", message: err.message });
      });

    errorOut = setTimeout(() => {
      setState({ status: "idle", message: null });
    }, 30000);
  };

  const buttonState = state.status === "loading" ? { disabled: true } : {};
  const message = () => {
    const status = state.status;
    switch (status) {
      case "success":
        return <p className={styles.success}>{state.message}</p>;
      case "error":
        return <p className={styles.error}>{state.message}</p>;
      case "info":
        return <p className={styles.info}>{state.message}</p>;
      default:
        return "";
    }
  };

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
          <input
            name="current_password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="password" className="form-label">
            New password
          </label>
          <input
            name="new_password"
            id="password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-4 mb-3 mt-3" id={styles.p_section}>
          {message()}
          <button className="btn" id="submit" {...buttonState}>
            {state.status === "loading" ? (
              <>
                <span className={styles.loader}></span>
                {state.message}
              </>
            ) : (
              "Save Password"
            )}
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
