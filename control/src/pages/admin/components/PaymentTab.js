import React, { useEffect, useState } from 'react'

import cardBack from "../assets/cardBack.svg";

import styles from "../styles/paymentMethod.module.css";
import CardList from './CardLists';

const PaymentTab = () => {

  const [formFilled, setFormFilled] = useState(true);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    if(cardNumber !== "" && cardName !== "" && expireDate !== "" && cvv !== "") {
      setFormFilled(false);
    }
    else {
      setFormFilled(true);
    }
  }, [cardName, cardNumber, expireDate, cvv])

  return (
  <>
  <CardList />
  <div className={styles.paymentWrapper}>
    <h6 className={styles.paymentHeader}>Add New Card</h6>
    <p className={styles.paymentParagraph}>
      Your card will not be charged at this time. It will be kept on file and will be used as the default for future charges.
    </p>

    <form className={styles.paymentForm}>
      <div className={styles.paymentInputGroup}>
        <label className={styles.paymentInputLabel} htmlFor="name">Name on Card* </label>
        <input onChange={(e) => setCardName(e.target.value)} className={styles.paymentInput} type="text" id="name" placeholder="John Doe" />
      </div>
      <div className={styles.paymentInputGroup}>
        <label className={styles.paymentInputLabel} htmlFor="number">Card Number* </label>
        <input onChange={(e) => setCardNumber(e.target.value)} className={styles.paymentInput} type="number" id="number" placeholder="1234 1234 1234 1234" />
      </div>

      <div className={styles.twoGrid}>
        <div className={styles.paymentInputGroup}>
          <label className={styles.paymentInputLabel} htmlFor="expiry">Expiry* </label>
          <input onChange={(e) => setExpireDate(e.target.value)} className={styles.paymentInput} type="text" id="expiry" placeholder="MM/YY" />
        </div>
        <div className={styles.paymentInputGroup}>
          <label className={styles.paymentInputLabel} htmlFor="cvv">CVV* </label>
          <div className={styles.paymentInputContainer}>
            <input onChange={(e) => setCvv(e.target.value)} className={styles.paymentInput} type="number" id="cvv" placeholder="" />
            <img className={styles.inputImg} src={cardBack} alt="card back icon" />
          </div>
          <p className={styles.inputInfo}>3 digits on back</p>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.paymentButton} disabled={formFilled}>Add Card</button>
      </div>
    </form>
  </div>
  </>
  )
}

export default PaymentTab
