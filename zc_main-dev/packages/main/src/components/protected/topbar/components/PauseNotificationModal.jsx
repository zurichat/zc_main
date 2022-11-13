import React, { useState, forwardRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/PauseNotification.module.css";

import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const PauseNotificationModal = ({ setShowModal, modal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.dateInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const TimeCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.dateInput} onClick={onClick} ref={ref}>
      {value}
      <BiChevronDown className={styles.downIcon} />
    </button>
  ));

  return (
    <div className={styles.modalWrapper}>
      <div
        onClick={() => setShowModal(!modal)}
        className={styles.modalOverlay}
      />
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>Pause notification until</div>
          <AiOutlineClose
            onClick={() => setShowModal(!modal)}
            className={styles.modalClose}
          />
        </div>
        <div className={styles.modalContentWrapper}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Date</label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              customInput={<ExampleCustomInput />}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Time</label>
            <DatePicker
              selected={startTime}
              onChange={date => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              customInput={<TimeCustomInput />}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.btns}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseNotificationModal;
