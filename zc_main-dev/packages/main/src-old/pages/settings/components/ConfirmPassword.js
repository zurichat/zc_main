import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// Component
import SettingsNav from "./SettingsNav";
//Style
import styles from "../styles/confirmPassword.module.css";
import FormMessage from "./FormMessage";

//Icons
import successIcon from "../assets/bx-success.svg";
import errorIcon from "../assets/bx-error.svg";

import { getToken, getUser, isLength, isMatch } from "../Utils/Common";

const initialState = {
  password: "",
  confirm_password: ""
};

const ConfirmPassword = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialState);
  const [message, setMessage] = useState("");
  const { password, confirm_password } = data;
  const history = useHistory();
  const token = getToken();

  // The section of the handle change input
  const handleChange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError(false);
  };

  // FUNCTION TO CONFIRM THE PASSWORD
  const confirmPassword = async e => {
    e.preventDefault();

    if (isLength(password))
      return setData(
        { ...data },
        setError(true),
        setMessage("Your password should be more than 6 characters")
      );

    if (!isMatch(password, confirm_password))
      return setData(
        { ...data },
        setError(true),
        setMessage("password & confirm-password does not match")
      );

    try {
      const res = await axios.post(
        "https://api.zuri.chat/auth/confirm-password",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setData({ ...data }, res);
      history.push("/deactivate-account");
    } catch (err) {
      setError(true);
      setMessage("That password is incorrect. Please try again");
    }
  };

  return (
    <div>
      <SettingsNav />
      <section className={`${styles.password_wrapper}`}>
        <FormMessage
          message="Confirm you password to continue"
          color="#00B87C"
          icon={successIcon}
        />

        {error ? (
          <FormMessage message={message} icon={errorIcon} color="#ED2222" />
        ) : (
          ""
        )}

        <div className={`${styles.form_wrapper}`}>
          <form>
            <div className={`${styles.form_group}`}>
              <label htmlFor="password">
                Enter your &nbsp;
                <span>password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
                name="password"
              />
            </div>

            <div className={`${styles.form_group}`}>
              <label htmlFor="password" className="mt-2">
                Confirm your &nbsp;
                <span>password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                value={confirm_password}
                name="confirm_password"
              />
            </div>
            <button
              onClick={confirmPassword}
              className={`${styles.submit_btn}`}
              type="submit"
            >
              Confirm password
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ConfirmPassword;
