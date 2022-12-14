import axios from "axios";
import { React, useState, useEffect } from "react";
import { BASE_API_URL } from "@zuri/utilities";
import Languages from "../constants/Language";
import styles from "../language/SettingsTab.module.css";

const Language = () => {
  const [selectLanguage, setSelectLanguage] = useState([]);
  // const [user, setUser] = useState(null);

  // let organization_id = JSON.parse(sessionStorage.organisations)[0].id;
  // let user_member_id = JSON.parse(sessionStorage.organisations)[0].member_id;

  // useEffect(() => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   if (user) {
  //     setUser(user);
  //   }
  // }, []);

  console.log(sessionStorage.getItem("user"));

  const handleSelect = e => {
    setSelectLanguage(e.target.value);
  };

  const handleSubmt = e => {
    e.preventDefault();

    // axios.patch(
    //   `${BASE_API_URL}/organizations/${organization_id}/members/${member_id}/settings`,

    //   {

    //   },

    //   {
    //     headers: {
    //       Authorization: "Bearer " + user.token
    //     }
    //   }
    // );
  };
  console.log(selectLanguage);

  return (
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
  );
};

export default Language;
