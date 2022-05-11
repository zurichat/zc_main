import React, { useState } from "react";
import styles from "../styles/paymentResponse.module.css";
import markIcon from "../assets/markIcon.svg";
import { Link } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";

const successBilling = () => {
  const [helpModal, setHelpModal] = useState(false);

  const [showModal, setShowModal] = useState(true);

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className={styles.backDrop} onClick={handleCancel}>
          <div className={styles.successCard}>
            <div className="card_body mt-5 text-center">
              <img src={markIcon} alt="payment successful" />
              <h3 className={styles.successHead}>Purchase Successful</h3>
              <p className={styles.successInfo}>
                Your wallet has been credited with 12 tokens
              </p>
            </div>

            <div className="card_footer d-flex justify-content-end">
              <p
                className={styles.successMore}
                onClick={() => setHelpModal(true)}
              >
                Buy more tokens
              </p>

              <Link to="/home" className={styles.btn_home}>
                <button type="button" className="btn text-right">
                  Go Home
                </button>
              </Link>
            </div>
            {helpModal ? <PurchaseModal setBuyModal={setHelpModal} /> : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default successBilling;
