import React from "react";
import styles from "../styles/OptionsPopUp.module.css";
import OptionsIcon from "../icons/three-dots.svg";
import { ToolTipController, Select } from "react-tooltip-controller";
import OptionsPopUp from "./OptionsPopUp";
// import styles1 from '../styles/ToolTipComponent.module.css';
// import ToolTipComponent from './ToolTipComponent';

const ToolTipMenu = () => {
  return (
    <>
      <ToolTipController
        detect="click"
        // offsetY="center"

        offsetY={20}
      >
        {/* // Selects the element controlling the tooltip */}
        <Select>
          <div className={styles.popUpWrap}>
            <button
              className={styles.popUpBtn}
              // onMouseOut={props.toggleModal}
            >
              <img
                src={OptionsIcon}
                alt="options"
                className={styles.optionsIcon}
              />
            </button>
          </div>
        </Select>

        {/* // Custom tooltip component */}
        {/* <ToolTipComponent /> */}
        <OptionsPopUp />
      </ToolTipController>
    </>
  );
};

export default ToolTipMenu;
