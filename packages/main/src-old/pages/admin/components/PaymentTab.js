import React, { useEffect, useState, useContext } from "react";

import Cleave from "cleave.js/react";

import cardBack from "../assets/cardBack.svg";

import styles from "../styles/paymentMethod.module.css";
import CardList from "./CardLists";
import toast, { Toaster } from "react-hot-toast";
import { ValidateCard } from "../Utils/Common";

import { CardContext } from "../../../context/CardContext";

const PaymentTab = () => {
  const { cardLists, setCardList } = useContext(CardContext);
  const [formFilled, setFormFilled] = useState(true);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      cardName,
      cardNumber,
      expireDate,
      cvv,
      cardType
    };

    if (cardLists?.length > 0) {
      const cardLists = JSON.parse(localStorage.getItem("cardList"));
      if (
        cardLists.length > 0 &&
        cardLists.filter(card => card.cardNumber !== data.cardNumber)
      ) {
        cardLists.push(data);
        setCardList(cardLists);
        localStorage.setItem("cardList", JSON.stringify(cardLists));
        toast.success("Card Added Successfully");
      } else {
        toast.error("Card already exists");
      }
    } else {
      const cardLists = [data];
      setCardList(cardLists);
      localStorage.setItem("cardList", JSON.stringify(cardLists));
      toast.success("Card Added Successfully");
    }

    setCardName("");
    setCardNumber("");
    setExpireDate("");
    setCvv("");
  };

  useEffect(() => {
    if (
      cardNumber !== "" &&
      cardName !== "" &&
      expireDate !== "" &&
      cvv !== ""
    ) {
      setFormFilled(false);
    } else {
      setFormFilled(true);
    }
  }, [cardName, cardNumber, expireDate, cvv]);

  return (
    <>
      <CardList />
      <div className={styles.paymentWrapper}>
        <h6 className={styles.paymentHeader}>Add New Card</h6>
        <p className={styles.paymentParagraph}>
          Your card will not be charged at this time. It will be kept on file
          and will be used as the default for future charges.
        </p>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.paymentInputGroup}>
            <label className={styles.paymentInputLabel} htmlFor="name">
              Name on Card*{" "}
            </label>
            <input
              onChange={e => setCardName(e.target.value)}
              value={cardName}
              className={styles.paymentInput}
              type="text"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className={styles.paymentInputGroup}>
            <label className={styles.paymentInputLabel} htmlFor="number">
              Card Number*{" "}
            </label>
            <div className={styles.paymentInputContainer}>
              <Cleave
                placeholder="1234 1234 1234 1234"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: function (type) {
                    setCardType(type);
                  }
                }}
                id="number"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                className={styles.paymentInput}
              />
              {ValidateCard(cardType)}
            </div>
          </div>

          <div className={styles.twoGrid}>
            <div className={styles.paymentInputGroup}>
              <label className={styles.paymentInputLabel} htmlFor="expiry">
                Expiry*{" "}
              </label>
              <Cleave
                placeholder="MM/YY"
                value={expireDate}
                options={{ date: true, datePattern: ["m", "d"] }}
                onChange={e => setExpireDate(e.target.value)}
                className={styles.paymentInput}
                id="expiry"
              />
            </div>
            <div className={styles.paymentInputGroup}>
              <label className={styles.paymentInputLabel} htmlFor="cvv">
                CVV*{" "}
              </label>
              <div className={styles.paymentInputContainer}>
                <Cleave
                  id="cvv"
                  placeholder=""
                  value={cvv}
                  options={{
                    blocks: [3],
                    numericOnly: true
                  }}
                  onChange={e => setCvv(e.target.value)}
                  className={styles.paymentInput}
                />
                <img
                  className={styles.inputImg}
                  src={cardBack}
                  alt="card back icon"
                />
              </div>
              <p className={styles.inputInfo}>3 digits on back</p>
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              className={styles.paymentButton}
              disabled={formFilled}
            >
              Add Card
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </>
  );
};

export default PaymentTab;
