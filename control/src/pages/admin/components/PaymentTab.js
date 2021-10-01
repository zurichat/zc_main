import React from 'react'

import styles from "../styles/paymentMethod.module.css";

const PaymentTab = () => {
  return <div className={styles.paymentWrapper}>
    <h6 className={styles.paymentHeader}>Add New Card</h6>
    <p className={styles.paymentParagraph}>
      Your card will not be charged at this time. It will be kept on file and will be used as the default for future charges.
    </p>
  </div>
}

export default PaymentTab
