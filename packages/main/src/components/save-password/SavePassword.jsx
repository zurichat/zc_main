import React, { useRef } from "react";
import useForm from "../use-form-hook";
import styles from "../save-password/SettingsTab.module.css";
import { BASE_API_URL } from "@zuri/utilities";
import { useTranslation } from "react-i18next";

const SavePassword = () => {
  const formElement = useRef(null);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const FORM_ENDPOINT = `${BASE_API_URL}/users/${user.id}`;
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
  const { t } = useTranslation();

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
            {t("Current_password")}
          </label>
          <input type="password" className="form-control" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="password" className="form-label">
            {t("new_password")}
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
            {t("save_password")}
          </button>
          <br />
          <p>
            {t("remember_password")} <span> {t("reset_password")}</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SavePassword;
