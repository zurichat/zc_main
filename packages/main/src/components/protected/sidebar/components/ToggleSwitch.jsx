import React, { useState, useEffect } from "react";
import styles from "../styles/Drop.module.css";
import axios from "axios";

const ToggleSwitch = ({ label, onChange }) => {
  const org_id = localStorage.getItem("currentWorkspace");
  const user = JSON.parse(sessionStorage.getItem("organisations"));
  const room = window.location.href.split("/").at(6);
  const BASE_URL = "https://chat.zuri.chat";
  //const BASE_URL = "https://chat.zuri.chat";

  const [data, setData] = useState(null);
  const [state, setState] = useState(false);
  const handleChange = () => {
    setState(!state);
    console.log(state);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/org/${org_id}/rooms/${room}`)
      .then(res => {
        setData(res.data.data);
      })
      .catch(e => console.log(e));
  }, [5]);

  const privateChannel = () => {
    const tina = user?.find(x => x.id == org_id)?.member_id;
    console.log("loading");
    if (data !== null) {
      const newData = { ...data, is_private: true };
      console.log(newData);
      axios
        .put(
          `${BASE_URL}/api/v1/org/${org_id}/members/${tina}/rooms/${room}`,
          newData
        )
        .then(res => {
          console.log(res);
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <div className={`${styles.container}`}>
      {label}{" "}
      <div className={`${styles.toggle__switch}`}>
        <input
          type="checkbox"
          className={`${styles.checkbox}`}
          name={label}
          id={label}
        />
        <label className={`${styles.label}`} htmlFor={label}>
          <span
            className={`${styles.inner}`}
            onChange={handleChange}
            onClick={state ? privateChannel : undefined}
          />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
