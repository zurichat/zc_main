import React, { useRef, useState } from "react";
import styles from "../save-password/SettingsTab.module.css";
import { BASE_API_URL } from "@zuri/utilities";
import { useTranslation } from "react-i18next";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SavePassword = () => {
  const formElement = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const FORM_ENDPOINT = `${BASE_API_URL}/users/${user.id}`;

  const checkPassword = async password => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/auth/confirm-password`,
        {
          password,
          confirm_password: password
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status === 200) {
        return response.statusText;
      }
      ({
        endpointUrl: FORM_ENDPOINT
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center"
      });
      return "error";
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);

    const form = formElement.current;

    const data = Array.from(form.elements)
      .filter(input => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    checkPassword(data.current_password)
      .then(response => {
        if (response === "OK") {
          /* TODO SEND REQUEST TO CHANGE USERS PASSWORD */
          toast.error("can't change password now try later", {
            position: "top-center"
          });
        }
        setIsLoading(false);
      })
      .catch(err => {
        toast.error(err.response);
        setIsLoading(false);
      });
  };

  const buttonState = isLoading ? { disabled: true } : {};

  const { t } = useTranslation();

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
            {t("current_password")}
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
            {t("new_password")}
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
          {/* <button className="btn" id="submit">
            {t("save_password")}
            </button> */}
          <button className="btn" id="submit" {...buttonState}>
            {isLoading ? (
              <>
                <span className={styles.loader}></span>
                Please wait....
              </>
            ) : (
              "Save Password"
            )}
          </button>
          <br />
          <p>
            {t("remember_password")} <span> {t("reset_password")}</span>
          </p>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default SavePassword;
