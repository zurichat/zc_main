import React, { useState } from "react";
import styles from "./NewPricingSection.module.css";
import {
  en_Pricing,
  fr_Pricing,
  zh_Pricing,
  de_Pricing,
  en_plans,
  fr_plans,
  zh_plans,
  de_plans,
  en_features,
  fr_features,
  zh_features,
  de_features
} from "../pricing-dummy.data";
import PricingBox from "./PricingBox";

const data_lang = localStorage.getItem("myLanguage");
const NewPricingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mobile}>
          {data_lang == "en"
            ? en_Pricing.map((item, id) => (
                <PricingBox pricing={item} key={id} />
              ))
            : data_lang == "fr"
            ? fr_Pricing.map((item, id) => (
                <PricingBox pricing={item} key={id} />
              ))
            : data_lang == "zh"
            ? zh_Pricing.map((item, id) => (
                <PricingBox pricing={item} key={id} />
              ))
            : data_lang == "de"
            ? de_Pricing.map((item, id) => (
                <PricingBox pricing={item} key={id} />
              ))
            : null}
        </div>
      </div>

      <div className={styles.desktop}>
        <section className={styles.pricingWrapper}>
          {data_lang == "en" ? (
            <PricingBox pricing={en_features} />
          ) : data_lang == "fr" ? (
            <PricingBox pricing={fr_features} />
          ) : data_lang == "zh" ? (
            <PricingBox pricing={zh_features} />
          ) : data_lang == "de" ? (
            <PricingBox pricing={de_features} />
          ) : null}
          {/* // <PricingBox pricing={features} /> */}

          {data_lang == "en"
            ? en_plans.map((plan, id) => <PricingBox pricing={plan} key={id} />)
            : data_lang == "fr"
            ? fr_plans.map((plan, id) => <PricingBox pricing={plan} key={id} />)
            : data_lang == "zh"
            ? zh_plans.map((plan, id) => <PricingBox pricing={plan} key={id} />)
            : data_lang == "de"
            ? de_plans.map((plan, id) => <PricingBox pricing={plan} key={id} />)
            : null}
        </section>
      </div>
    </div>
  );
};

export default NewPricingSection;
