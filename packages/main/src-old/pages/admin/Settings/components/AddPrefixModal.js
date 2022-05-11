import React, { useEffect, useState } from "react";
import styles from "../../styles/ChannelPrefixes.module.css";
import { getCurrentWorkspace } from "../../../admin/Utils/Common";
import axios from "axios";

const AddPrefixModal = ({ closeModal, onAdd }) => {
  const orgID = getCurrentWorkspace();
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [data, setData] = useState({
    description: "",
    prefix: "",
    creator: "Admin"
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .patch(`https://api.zuri.chat/organizations/${orgID}/prefixes`, data)
      .then(res => {
        const responseData = res.data;
        if (responseData.status === 200) {
          onAdd(data);
          closeModal(null)(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className={styles.modal} role="dialog">
      <div className={styles.subModal}>
        <div className={styles.modalHeader}>
          <h2>Add a channel prefix</h2>
          <button
            className={styles.closeBtn}
            onClick={() => closeModal(null)(false)}
          >
            &times;
          </button>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="prefix">
              <strong className={styles.prefixStrong}>Prefix</strong>{" "}
              <span className={styles.prefixText}>(max 10 characters)</span>
            </label>
            <input
              className={styles.inputField}
              name="prefix"
              type="text"
              id="prefix"
              maxLength="10"
              value={data.prefix}
              onChange={event =>
                setData(data => ({
                  ...data,
                  [event.target.name]: event.target.value
                }))
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">
              <strong className={styles.prefixStrong}>Description</strong>{" "}
              <span className={styles.prefixText}>(max 80 characters)</span>
            </label>
            <input
              className={styles.inputField}
              name="description"
              type="text"
              id="description"
              maxLength="80"
              value={data.description}
              onChange={event =>
                setData(data => ({
                  ...data,
                  [event.target.name]: event.target.value
                }))
              }
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.cancelBtn}
              type="reset"
              onClick={() => closeModal(null)(false)}
            >
              Cancel
            </button>
            <button
              className={styles.saveBtn}
              disabled={data.prefix.length < 1}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPrefixModal;
