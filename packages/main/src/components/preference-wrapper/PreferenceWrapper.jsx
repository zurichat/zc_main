import React, { useState } from "react";
import styles from "../preference-wrapper/SettingsTab.module.css";
import { motion } from "framer-motion";

const PreferenceWrapper = ({ title, text, btnText, timeZone, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <motion.div layout className={`${styles.settings_wrapper}`}>
      <motion.div layout className={styles.settingsTab}>
        <div layout className={styles.settingleft}>
          {title} <br />
          <span>{text}</span>
        </div>
        <div className={styles.settingsright}>
          <button onClick={() => setShowContent(prev => !prev)}>
            {showContent ? "close" : btnText}
          </button>
        </div>
      </motion.div>

      <div className={`${styles.settings_content}`}>
        {showContent && children}
      </div>
    </motion.div>
  );
};

export default PreferenceWrapper;
