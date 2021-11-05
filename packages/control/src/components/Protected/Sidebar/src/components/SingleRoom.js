import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { navigateToUrl } from "single-spa";
import styles from "../styles/Drop.module.css";
import Badge from "./badge";

export default function SingleRoom({ image, name, link }) {
  return (
    <div className={`row p-0 ${styles.dropDown} text-decoration-none `}>
      <div
        className={`col-12 d-flex align-items-center ${styles.plugin__title}`}
      >
        <div className={`d-flex align-items-center`}>
          <img className={`${styles.item__img}`} src={image} alt="icon" />
        </div>
        <div
          className={`w-100 d-flex align-items-center justify-content-between`}
        >
          <p className={`mb-0 ${styles.dropdown__room}`}> {name}</p>
          {/* <img src={infoIcon} alt="icon" role="button" /> */}
          {link ? (
            <a href={link} onClick={navigateToUrl}>
              <AiOutlinePlus className={`${styles.icon}`} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
