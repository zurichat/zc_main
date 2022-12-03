import React, { useState } from "react";
import styles from "../styles/SearchValueComponent.module.css";
import * as singleSpa from "single-spa";

const SearchValue = ({
  src,
  title,
  content,
  onClose,
  created_at,
  plugin_name,
  destination_Url
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const redirect = () => {
    if (!destination_Url) {
      onClose();
    }
    singleSpa.navigateToUrl(destination_Url);
    onClose();
  };

  const timeStamp = new Date(created_at).toDateString();
  return (
    <div className={styles.resultCard}>
      <p className={styles.result_plugin}>
        {`#${plugin_name} plugin`}{" "}
        <span className={styles.created_date}>{` - ${timeStamp}`}</span>
      </p>
      <div className={styles.card_cont}>
        <div className={styles.card_img}>
          <img src={src} />
        </div>
        <div className={styles.card_desc}>
          <p onClick={() => redirect()} className={styles.result_card_title}>
            {title}
            <span className={styles.result_card_time}>{timeStamp}</span>
          </p>
          <div>
            <p onClick={() => redirect()} className={styles.result_card_desc}>
              {isTruncated ? `${content.substring(0, 250)}` : content}
            </p>
            {isTruncated && content.length > 250 ? (
              <button onClick={() => setIsTruncated(false)}>
                {" "}
                <span>...show more</span>
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchValue;
