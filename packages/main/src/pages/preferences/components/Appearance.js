import React from "react";

import whiteMode from "../assets/images/white-mode.png";
import darkMode from "../assets/images/dark-mode.png";

import styles from "../assets/css/appearance.css";

export default function Appearance() {
  return (
    <div className={`${styles.appearance}`}>
      <div className={`${styles.appearanceCon}`}>
        <p>Change the appearance across all of your workspaces.</p>
        <div className="d-flex align-items-center mb-3">
          <input type="radio" name="mode" id="checkbox1" />
          <label htmlFor="checkbox1">Sync with OS setting</label>
        </div>
        <div className={`${styles.sidebarPage}`}>
          <i>
            Automatically switch between light and dark themes when your system
            does.
          </i>
          <div className="mt-4 d-flex">
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="checkbox2" className=" position-relative">
                <input
                  type="radio"
                  name="mode"
                  id="checkbox2"
                  className="position-absolute bottom-0 end-0"
                />
                <img src={whiteMode} alt="" className="me-5" />
              </label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="checkbox3" className="position-relative">
                <input
                  type="radio"
                  name="mode"
                  id="checkbox3"
                  className="position-absolute bottom-0 end-0"
                />
                <img src={darkMode} alt="" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
