import React, { useState } from "react";
//import YearMonthPicker from 'react-year-month-picker'
import styles from "../styles/adminHistoryTab.module.css";

const HistoryTab = () => {
  const [scheduled, setScheduled] = useState(null);

  const handleChange = m => {
    setScheduled(m);
    // console.log(scheduled)
  };

  const handleSubmit = () => {};

  return (
    <section className={styles.history_tab_container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.history_form_group}>
          {/*<YearMonthPicker 
            closeOnSelect
            onChange={handleChange}
            value={scheduled}
          />*/}
        </div>

        <button className={`${styles.history_form_btn} ${styles.history_btn}`}>
          Go To
        </button>
      </form>

      <div className={styles.history_header}>
        <div className={styles.history_btn_wrapper}>
          <button className={styles.history_btn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="6"
              height="6"
              viewBox="0 0 6 6"
            >
              <path
                stroke="#333"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3H1M2.5 4.5 1 3l1.5-1.5"
              />
            </svg>{" "}
            &nbsp; August 2021
          </button>
        </div>
        <h3>Septemper 2021</h3>
      </div>

      <div className={styles.history_content}>
        <p>You have no billing history for this month.</p>
      </div>
    </section>
  );
};

export default HistoryTab;
