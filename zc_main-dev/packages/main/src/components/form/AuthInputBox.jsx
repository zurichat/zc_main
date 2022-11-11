import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";

import styles from "./AuthInputBox.module.css";

const InputBox = ({
  id,
  type,
  value,
  error,
  setValue,
  placeholder,
  name,
  onFocus,
  required = true
}) => {
  const ref = React.useRef(null);
  const [passwordVisible, setpasswordVisible] = React.useState(
    type === "password" ? true : false
  );

  const passwordToggle = e => {
    e.preventDefault();
    setpasswordVisible(!passwordVisible);

    ref.current.type = passwordVisible ? "text" : "password";
  };

  return (
    <>
      <div className={`${styles.InputContainer}`}>
        <label
          htmlFor={id}
          className={`${styles.InputLabel} ${error && styles.InputLabelError}`}
        >
          {name}
        </label>

        <div
          className={`${styles.InputWrapper} ${
            type === "password" ? styles.InputWrapperWithPassword : ""
          } ${error ? styles.InputContainerError : ""} `}
        >
          <input
            id={id}
            ref={ref}
            className={`${styles.InputElement} ${error && styles.is_invalid}`}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={e => setValue(e.target.value)}
            onFocus={onFocus}
            data-cy="auth_form_textfield"
          />

          {/password/i.test(name) && (
            <div
              className={`${styles.ToggleVisibility}`}
              onClick={passwordToggle}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </div>
          )}
        </div>

        {error && (
          <span className={`${styles.InputError}`}>
            <RiErrorWarningLine className={`${styles.InputWarningIcon}`} />
            <div style={{ paddingLeft: "1rem" }}>{error}</div>
          </span>
        )}
      </div>
    </>
  );
};

export default InputBox;
