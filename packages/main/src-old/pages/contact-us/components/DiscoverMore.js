import React from "react";
import styles from "../styles/DiscoverMore.module.css";
const DiscoverMore = () => {
  return (
    <section className={styles.dicover_wrapper}>
      <div className={styles.container}>
        <h3>Discover More</h3>
        <p className={styles.sub1}>
          From channels to search, learn how Zuri Chat works from top to bottom.
        </p>
        <p className={styles.sub2}>Visit the help Center </p>
      </div>
    </section>
  );
};

export default DiscoverMore;
