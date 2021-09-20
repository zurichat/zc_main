import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./index.module.css";

const Index = () => {
  return (
    <div>
      <div className={styles.container}>
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
