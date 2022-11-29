import React, { useState } from "react";
import styles from "../preference-wrapper/Preference.module.css";
import { motion } from "framer-motion";

const PreferenceWrapper = ({
  title,
  text,
  btnText,
  timeZone,
  children,
  imgsource
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <motion.div layout className={`${styles.settings_wrapper}`}>
      <motion.div layout className={styles.settingsTab}>
        <div layout className={styles.settingleft}>
          {imgsource ? (
            <div className={styles.iconConfig}>
              <div className={styles.settingLogoIconContainer}>
                <img
                  src={imgsource}
                  alt=""
                  className={styles.settingLogoIcon}
                />
              </div>
              <div className={styles.settingleftText}>
                {title}
                <span>{text}</span>
              </div>
            </div>
          ) : (
            <div>
              {title}
              <span>{text}</span>
            </div>
          )}

          {/* {timeZone} */}
        </div>
        <div className={styles.settingsright}>
          {imgsource ? (
            <div className={styles.iconButton}>
              <button onClick={() => setShowContent(prev => !prev)}>
                {showContent ? "close" : btnText}
              </button>
            </div>
          ) : (
            <button onClick={() => setShowContent(prev => !prev)}>
              {showContent ? "close" : btnText}
            </button>
          )}
        </div>
      </motion.div>

      <div className={`${styles.settings_content}`}>
        {showContent && children}
      </div>
    </motion.div>
  );
};

export default PreferenceWrapper;
