import React from "react";
import { Link } from "react-router-dom";

import styles from "./FeatureRow.module.css";

export default function FeatureRow(props) {
  return (
    <div className={`${styles.ft_row} ${props.rowOrder}`}>
      <title>
        Zuri Chat - Communicate and Collaborate from wherever you are
      </title>
      <div className={`${styles.ft_col}`}>
        <img src={props.src} alt={props.alt} className={`${styles.ft_img}`} />
      </div>
      <div className={`${styles.ft_col}`}>
        <div className={`${styles.ft_texts}`}>
          <p className={`${styles.ft_text_one}`}>{props.pContent1}</p>
          <h2 className={`${styles.ft_heading}`}>{props.h2Content}</h2>
          <p className={`${styles.ft_p}`}>{props.pContent2}</p>
        </div>
        <div className={`${styles.ft_link_wrap}`}>
          <Link className={`${styles.ft_link}`} to={props.href}>
            <div className={`${styles.ft_link_div}`}>
              <p className={`${styles.ft_link_p}`}>{props.aContent}</p>
              <img
                src={props.arrow}
                alt="arrow right icon"
                className={`${styles.arrow_right}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
