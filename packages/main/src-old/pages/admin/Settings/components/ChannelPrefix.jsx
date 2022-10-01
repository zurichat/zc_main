import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ChannelPrefixes.module.css";

const ChannelPrefix = ({ prefix, description, creator, onDelete }) => {
  return (
    <div className={styles.prefix}>
      <p className={styles.prefixP}>
        <strong className={styles.prefixStrong}># {prefix}</strong> —
        {description}
      </p>
      <div className={styles.prefixRight}>
        <p>Added by {creator}</p>
        <Icon
          className={styles.icon}
          icon="uil:times-circle"
          width="20"
          height="20"
          onClick={() => onDelete(prefix)}
        />
      </div>
    </div>
  );
};

export default ChannelPrefix;
