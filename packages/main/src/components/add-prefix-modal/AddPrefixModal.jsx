import React, { useEffect, useState } from "react";
import styles from "../add-prefix-modal/ChannelPrefixes.module.css";
import axios from "axios";

const AddPrefixModal = ({ closeModal, onAdd }) => {
  let organization_id = JSON.parse(sessionStorage.organisations)[0].id;
  const [data, setData] = useState({
    description: "",
    prefix: "",
    creator: "Admin"
  });

  const handleChange = event =>
    setData(data => ({
      ...data,
      [event.target.name]: event.target.value
    }));

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .patch(
        `https://api.zuri.chat/organizations/${organization_id}/prefixes`,
        data,
        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then(res => {
        const responseData = res.data;
        if (responseData.status === 200) {
          onAdd(data);
          closeModal(null)(false);
        }
      });
  };

  return (
    <>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
    </>
  );
};

export default AddPrefixModal;
