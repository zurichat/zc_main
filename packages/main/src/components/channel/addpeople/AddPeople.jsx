import styles from "./AddPeople.module.css";
import cancel from "../../../assets/images/close.png";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const AddPeople = ({ setAddPeople }) => {
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: green[600],
      "&:hover": {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity)
      }
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: green[600]
    }
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <div className={styles.addpeople__wrapper}>
      <form
        action="
       
      "
        className={styles.addpeople__container}
      >
        <div className={styles.addpeople__flex}>
          <p className={styles.addpeople__text}>Add People</p>

          <div
            onClick={() => {
              setAddPeople(false);
            }}
            className={styles.addpeople__img}
          >
            <img src={cancel} alt="" />
          </div>
        </div>
        <p className={styles.addpeople__txt}># important briefings</p>

        <div className={styles.inputradio}>
          <input type="radio" name="" id="" />
          <label htmlFor="">
            Add all members of <b>Zuri Redesign </b>{" "}
          </label>
        </div>
        <div className={styles.inputradio}>
          <input type="radio" name="" id="" />
          <label htmlFor="">Add specific people only</label>
        </div>

        <div className={styles.admin__container}>
          <div>
            <GreenSwitch {...label} defaultChecked />
          </div>
          <div>
            <p className={styles.admin_text}>
              Automatically add anyone who joins <b> Zuri Redesign</b>
            </p>
            <p className={styles.admin_txt_faint}>
              Only admins can see this setting
            </p>
          </div>
        </div>

        <div className={styles.addpeople__button}>
          <p
            className={styles.addpeople__buttn_txt}
            onClick={() => {
              setAddPeople(false);
            }}
          >
            Done
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddPeople;
