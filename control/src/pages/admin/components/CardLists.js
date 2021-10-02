import React from "react";

import styles from "../styles/cardList.module.css";

// images
import Mastercard from "../assets/Mastercard.svg";

const CardList = () => {
    return (
        <div className={styles.cardWrapper}>
            <h5 className={styles.cardHeading}>Existing Cards</h5>

            <div className={styles.cardLists}>
                <div className={styles.cardList}>
                    <div className={styles.cardDetails}>
                        <img className={styles.cardImg} src={Mastercard} alt="card logo" />

                        <div className={styles.cardInfo}>
                            <h6 className={styles.ownerName}>Chioma Folajomi</h6>
                            <p className={styles.otherInfo}>Mastercard ending with 7668•08.24</p>
                            <p className={styles.otherInfo}>Future payments will come from this card</p>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.buttonPrimary}>Default</button>
                        <button className={styles.buttonSecondary}>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardList;
