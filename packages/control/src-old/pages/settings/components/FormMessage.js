import React from "react";
import styles from "../styles/confirmPassword.module.css";

const FormMessage = ({ message, color, icon }) => {
  const leftBorderColor = {
    boxShadow: `inset 6px 0 0 ${color}`
  };

  return (
    <article className={`${styles.message}`} style={leftBorderColor}>
      <img src={icon} alt="" />
      {message}
    </article>
  );
};

export default FormMessage;
