import React, { useEffect } from "react";

import styles from "../styles/cardList.module.css";

// images
import Mastercard from "../assets/Mastercard.svg";
import { getUsersCard, ValidateCard } from "../Utils/Common";
import toast from "react-hot-toast";

const CardList = () => {

    const [cardList, setCardList] = React.useState([]);

    useEffect(() => {
        setCardList(getUsersCard());
    }, [])

    const handleDelete = (cardNumber) => {
        setCardList(cardList.filter(card => card.cardNumber !== cardNumber));
        localStorage.setItem("cardList", JSON.stringify(cardList.filter(card => card.cardNumber !== cardNumber)));
        toast.success("Card deleted successfully")
    }

    return (
        <>
        {
            cardList.length > 0 &&
            <div className={styles.cardWrapper}>
                <h5 className={styles.cardHeading}>Existing Cards</h5>

                <div className={styles.cardLists}>
                    {
                        cardList.map(card => (
                            <div key={card.cardNumber} className={styles.cardList}>
                                <div className={styles.cardDetails}>
                                    {ValidateCard(card.cardType, styles.cardImg)}

                                    <div className={styles.cardInfo}>
                                        <h6 className={styles.ownerName}>Chioma Folajomi</h6>
                                        <p className={styles.otherInfo}>Mastercard ending with 7668•08.24</p>
                                        <p className={styles.otherInfo}>Future payments will come from this card</p>
                                    </div>
                                </div>
                                <div className={styles.btnContainer}>
                                    <button className={styles.buttonPrimary}>Default</button>
                                    <button onClick={() => handleDelete(card.cardNumber)} className={styles.buttonSecondary}>X</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        </>
    )
}

export default CardList;
