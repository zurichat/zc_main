import React from "react";
import styles from "../prefix-add/ChannelPrefixes.module.css";

const PrefixAdded = ({ text, closePopup }) => {
  return (
    <div className={styles.PrefixAdded}>
      <p>
        {text}{" "}
        <button
          className={styles.PrefixAddedBtn}
          onClick={() => closePopup("", false)}
        >
          &times;
        </button>
      </p>
    </div>
  );
};

export default PrefixAdded;
