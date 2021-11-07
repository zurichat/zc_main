import React from "react";
import styles from "../../styles/ChannelPrefixes.module.css";

const PrefixRemoved = () => {
  return (
    <div className={styles.PrefixAdded}>
      <p>
        New prefix added! <button>X</button>
      </p>
    </div>
  );
};

export default PrefixRemoved;
