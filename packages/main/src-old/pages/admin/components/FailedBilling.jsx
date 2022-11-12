import React, { useState } from "react";
import styles from "../styles/paymentResponse.module.css";
import warningIcon from "../assets/warning.svg";

const failedBilling = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className={styles.backDrop} onClick={handleCancel}>
          <div className={styles.failedCard}>
            <div className="card_body mt-5 text-center">
              <img src={warningIcon} alt="payment successful" />
              <h3 className={styles.failedHead}>Error</h3>
              <p className={styles.successInfo}>
                ERC-20 Token Purchase Error. Please try again in a few seconds
              </p>
            </div>

            <div className="card_footer d-flex justify-content-end">
              <button
                type="button"
                className="btn text-right"
                onClick={handleCancel}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default failedBilling;
