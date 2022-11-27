import React, { useState } from "react";
import styles from "./NewPricingSection.module.css";
import {
  pricing_keys,
  pricing_plans,
  pricing_features
} from "../pricingKeysData";
import PricingBox from "./PricingBox";

const NewPricingSection = () => {
  const textAlign = () => {
    if (
      window.localStorage.myLanguage === "ar" ||
      window.localStorage.myLanguage === "iw"
    ) {
      return {
        textAlign: "right"
      };
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mobile} style={textAlign()}>
          {pricing_keys.map((item, id) => (
            <PricingBox pricing={item} key={id} />
          ))}
        </div>
      </div>

      <div className={styles.desktop}>
        <section className={styles.pricingWrapper}>
          {<PricingBox pricing={pricing_features} style={textAlign()} />}

          {pricing_plans.map((plan, id) => (
            <PricingBox pricing={plan} key={id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewPricingSection;
