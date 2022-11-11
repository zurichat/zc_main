import React, { useState, useEffect } from "react";
import { countries } from "../data/countries";
import styles from "../styles/adminSettingsTab.module.css";
import axios from "axios";

const SettingsTab = () => {
  const [formValue, setFormValue] = useState({});
  const [select, setSelect] = useState("Select a country");
  const [notes, setNotes] = useState("");
  const [organizationId, setOrganizatonId] = useState(
    localStorage.getItem("currentWorkspace") || ""
  );
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

  useEffect(() => {
    if (
      sessionStorage.getItem("token") &&
      localStorage.getItem("currentWorkspace")
    ) {
      const userToken = sessionStorage.getItem("token");
      const orgId = localStorage.getItem("currentWorkspace");

      setToken(userToken);
      setOrganizatonId(orgId);
    }
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue(values => ({ ...values, [name]: value }));
  };

  const handleSelection = e => {
    setSelect(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const orgData = { ...formValue, country: select };

    try {
      const response = await axios.patch(
        `https://api.zuri.chat/organizations/${organizationId}/billing`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(orgData)
        }
      );
      if (response.status !== 200) {
        throw Error(
          `Unable to fetch list of wokspaces, status code: ${response.status}`
        );
      }
      const { data } = await response.data;
      // console.log(data)
    } catch (error) {
      console.error(error);
    }

    setFormValue({});
    setSelect("Select a country");
  };

  return (
    <section className={styles.setting_tab_container} onSubmit={handleSubmit}>
      <header>
        <h3>Company Name & Address</h3>
        <p>
          The information, would be included on all billing invoices on your
          account
        </p>
      </header>
      <form className={styles.settings_tab_form}>
        <section>
          <div className={`${styles.admin_form_group}`}>
            <label htmlFor="countries">Country*</label>
            <div className={styles.form_select}>
              <select value={select} onChange={handleSelection} required>
                <option disabled defaultValue>
                  Select a country
                </option>
                {countries.map((country, index) => {
                  const { name } = country;

                  return (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="11"
                height="6"
                viewBox="0 0 11 6"
              >
                <path
                  stroke="#333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.23"
                  d="m1.3.75 4.05 4.5L9.39.75"
                />
              </svg>
            </div>
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="company_name">Company name*</label>
            <input
              type="text"
              placholder=""
              value={formValue.company_name || ""}
              onChange={handleChange}
              name="company_name"
              id="company_name"
              required
            />
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="street_address">Street address*</label>
            <input
              type="text"
              placholder=""
              value={formValue.street_address || ""}
              onChange={handleChange}
              name="street_address"
              id="street_address"
              required
            />
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="suite">Suite/Unit</label>
            <input
              type="text"
              placholder=""
              value={formValue.suite || ""}
              onChange={handleChange}
              name="suite"
              id="suite"
              required
            />
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="city">City*</label>
            <input
              type="text"
              placholder=""
              value={formValue.city || ""}
              onChange={handleChange}
              name="city"
              id="city"
              required
            />
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="state">State/Province/Region</label>
            <input
              type="text"
              placholder=""
              value={formValue.state || ""}
              onChange={handleChange}
              name="state"
              id="state"
              required
            />
          </div>
          <div className={styles.admin_form_group}>
            <label htmlFor="postal_code">Postal code</label>
            <input
              type="text"
              placholder=""
              value={formValue.postal_code || ""}
              onChange={handleChange}
              name="postal_code"
              id="postal_code"
              required
            />
          </div>
        </section>
        <section className={styles.right_field}>
          <div className={styles.admin_form_group}>
            <label htmlFor="additional_notes">Additional Notes</label>
            <textarea
              name="additional_notes"
              id="additional_notes"
              value={formValue.additional_notes || ""}
              onChange={handleChange}
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <p>
            Use this field for additional information you would like to add on
            your billing statement
          </p>
        </section>
        <div className={styles.btn_wrapper}>
          <p>* Indicates a required field</p>
          <button type="submit" className={styles.save_btn}>
            Save Settings
          </button>
        </div>
      </form>

      <section className={styles.upgrade_section}>
        <header>
          <h3>Upgrade & Purchasing</h3>
          <p>Choose who can publish a paid plan for your workspace</p>
        </header>
        <form>
          <h4>Who can purchase Zuri Chat</h4>
          <div className={styles.admin_input_group}>
            <input
              type="radio"
              name="purchase"
              id="allMembers"
              defaultChecked
            />
            <label htmlFor="allMembers">All new member of this workspace</label>
          </div>
          <div className={styles.admin_input_group}>
            <input
              type="radio"
              name="purchase"
              id="onlyOwners"
              defaultChecked
            />
            <label htmlFor="onlyOwners">Only workspace owners</label>
          </div>
          <div className={styles.btn_wrapper}>
            <button type="submit" className={styles.save_btn}>
              Save Settings
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SettingsTab;
