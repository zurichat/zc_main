import { React, useState, useEffect } from "react";
import styles from "../time-zone/SettingsTab.module.css";
import TimeZones from "../constants/TimeZone";
import axios from "axios";
import { BASE_API_URL } from "@zuri/utilities";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimeZone = () => {
  const [selectTimezone, setSelectTimezone] = useState([]);
  const [user, setUser] = useState(null);

  const handleSelect = e => {
    setSelectTimezone(e.target.value);
  };

  let organization_id = JSON.parse(sessionStorage.organisations)[0].id;
  let user_member_id = JSON.parse(sessionStorage.organisations)[0].member_id;

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleTimezone = e => {
    e.preventDefault();

    axios
      .patch(
        `${BASE_API_URL}/organizations/${organization_id}/members/${user_member_id}/settings`,

        {
          languages_and_regions: {
            time_zone: selectTimezone
          }
        },
        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then(res => {
        if (res) {
          toast.success("Timezone changed Sucessfully", {
            className: styles.sucess_toast_style,
            draggable: true,
            autoClose: 3000,
            transition: Zoom
          });
        }
        const userTimeZone = JSON.parse(sessionStorage.getItem("user"));

        userTimeZone.time_zone = selectTimezone;

        sessionStorage.setItem("user", JSON.stringify(userTimeZone));
      })
      .catch(err => {
        if (err) {
          toast.error("Unable to update timezone", {
            className: styles.error_toast_style,
            draggable: true,
            autoClose: 3000,
            transition: Zoom
          });
        }
      });
  };

  return (
    <>
      <ToastContainer draggable={false} />
      <div className={styles.passwordsection}>
        <form className="row d-flex flex-column" onSubmit={handleTimezone}>
          <div className="col-md-5 mt-2">
            <select className="form-select" required onChange={handleSelect}>
              {TimeZones.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-4 mb-3 mt-2">
            <button className="btn">Save Time Zone</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TimeZone;
