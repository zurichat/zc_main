import React from "react";
import style from "../styles/ClearTime.module.css";

const ClearTime = ({ defaultOptionValue }) => {
  return (
    <div className={style.clearTime}>
      <div>
        <p className="fw-bold">Clear after: </p>
      </div>
      <div className={style.clear_time_select}>
        <select
          className={`${"form-select"} ${"mb-3"} ${"custom-select"} ${
            style.clear_time_option
          } fw-light text-dark`}
        >
          <option defaultValue>{defaultOptionValue}</option>
          <option value="">Don't clear</option>
          <option value=""> 30 minutes </option>
          <option value=""> 1 hour</option>
          <option value=""> 4 hours</option>
          <option value=""> Today </option>
          <option value=""> This week </option>
        </select>
      </div>
    </div>
  );
};

export default ClearTime;
