import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import styles from "./why.module.css";
export default function Body() {
  return (
    <div className={styles.whyzuri}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
