import React from "react";
import styles from "../tool-tip-menu/OptionsPopUp.module.css";
import OptionsIcon from "../tool-tip-menu/assets/three-dots.svg";
import { ToolTipController, Select } from "react-tooltip-controller";
import OptionsPopUp from "../options-popup/OptionsPopUp";

const ToolTipMenu = () => {
  return (
    <>
      <ToolTipController detect="click" offsetY={20}>
        <Select>
          <div className={styles.popUpWrap}>
            <button className={styles.popUpBtn}>
              <img
                src={OptionsIcon}
                alt="options"
                className={styles.optionsIcon}
              />
            </button>
          </div>
        </Select>
        <OptionsPopUp />
      </ToolTipController>
    </>
  );
};

export default ToolTipMenu;
