import React, { useState } from "react";
import styles from "./NewPricingSection.module.css";
import { checkmark } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PricingBox = ({ pricing }) => {
  const [toggle, setToggle] = useState(false);

  const { t } = useTranslation();

  return (
    <section className={styles.pricing}>
      <header className={styles.pricing__header}>
        <div>
          <h5>{pricing.title}</h5>
          <p className={styles.subheading}>{pricing.subTitle}</p>
          {pricing.amount && (
            <div>
              <span className={styles.price}>{pricing.amount}</span>
              <span className={styles.subPrice}>
                {toggle ? "/yearly" : "/month"}
              </span>
            </div>
          )}
        </div>
        {pricing.toggle == "Toggle" && (
          <div className={styles.pricing__control}>
            <span>{t("pricing.cardThree.duration_one")}</span>
            <div className={styles.toggle} onClick={() => setToggle(!toggle)}>
              <div
                className={`${styles.toggle__circle} ${
                  toggle && styles.active
                } `}
              ></div>
            </div>
            <span>{t("pricing.cardThree.duration_two")}</span>
          </div>
        )}
      </header>

      <div className={styles.pricing__benefits}>
        {pricing.benefits.map((item, id) => (
          <div className={styles.benefit} key={id}>
            {pricing.checkMarkIcon && (
              <img
                className={styles.checkMark}
                src={pricing.checkMarkIcon}
                alt="check-mark"
              />
            )}

            {item === "available" ? (
              <img
                className={styles.checkMark}
                src={checkmark}
                alt="check-mark"
              />
            ) : (
              <p>{item}</p>
            )}
          </div>
        ))}
      </div>
      {!pricing.featureList && (
        <div className={styles.cta}>
          <button className={styles.button}>
            <Link to="/login" className={styles.link}>
              {t("pricing.cardThree.button")}
            </Link>
          </button>
        </div>
      )}
    </section>
  );
};

export default PricingBox;
