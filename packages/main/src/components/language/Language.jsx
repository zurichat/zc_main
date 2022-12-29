import axios from "axios";
import { React, useState, useEffect } from "react";
import { BASE_API_URL } from "@zuri/utilities";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Languages from "../constants/Language";
import styles from "../language/SettingsTab.module.css";

const Language = () => {
  const [selectLanguage, setSelectLanguage] = useState([]);
  const [user, setUser] = useState(null);

  let organization_id = JSON.parse(sessionStorage.organisations)[0].id;
  let user_member_id = JSON.parse(sessionStorage.organisations)[0].member_id;

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleSelect = e => {
    setSelectLanguage(e.target.value);
  };

  const handleSubmt = e => {
    e.preventDefault();

    axios
      .patch(
        `${BASE_API_URL}/organizations/${organization_id}/members/${user_member_id}/settings`,

        {
          languages_and_regions: {
            language: selectLanguage
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
          toast.success("Language changed Sucessfully", {
            className: styles.sucess_toast_style,
            draggable: true,
            autoClose: 3000,
            transition: Zoom
          });
        }
        const orgLanguage = JSON.parse(localStorage.getItem("userData"));

        orgLanguage.user.settings.languages_and_regions.language =
          selectLanguage;

        localStorage.setItem("userData", JSON.stringify(orgLanguage));
      })
      .catch(error => {
        if (error) {
          toast.error("Unable to update language", {
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
      <ToastContainer />
      <div className={styles.passwordsection}>
        <form className="row d-flex flex-column" onSubmit={handleSubmt}>
          <div className="col-md-5 mt-2">
            <select className="form-select" required onChange={handleSelect}>
              <option disabled defaultValue>
                Choose language
              </option>
              {Languages.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-4 mb-3 mt-2">
            <button className="btn">Save Locale</button>
          </div>
        </form>
      </div>
    </>

  );
};

export default Language;
