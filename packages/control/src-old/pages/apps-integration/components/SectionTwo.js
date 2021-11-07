import React from "react";
import styles from "../styles/SectionTwo.module.css";
import Categories from "./Categories";
import TrelloImg from "../assets/trello.svg";

const SectionTwo = () => {
  const Card = () => {
    return (
      <div>
        <div className={styles.cardBg}>
          <img src={TrelloImg} alt="trello" className={styles.cardImg} />
        </div>
        <div>
          <h4>Trello</h4>
          <p>TODO & Time Management</p>
        </div>
      </div>
    );
  };

  const Cards = () => {
    const numberOfCards = 6;
    const arr = new Array(numberOfCards).fill(null);
    return (
      <div className={styles.cardsContainer}>
        {arr && arr.map((val, index) => <Card key={`${val + index}`} />)}
      </div>
    );
  };

  const Recommendations = () => {
    return (
      <div className={styles.recommendationsContainer}>
        <p>Recommended for you</p>
        <ul>
          <li>
            <a className={styles.active} href="#">
              News & Noteworthy
            </a>
          </li>
          <li>
            <a href="#">Most Integrated</a>
          </li>
          <li>
            <a href="#">Premium</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Categories />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Recommendations />
          <Cards />
        </div>
        <button className={styles.showButton}>Show more</button>
      </div>
    </div>
  );
};

export default SectionTwo;
