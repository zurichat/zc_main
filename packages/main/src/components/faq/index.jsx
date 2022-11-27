import { useState } from "react";
import styles from "./index.module.css";
import faq_data from "./pricingFaqKeys.jsx";
import "../../translations/i18n";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const toggle = item =>
    selected === item ? setSelected(null) : setSelected(item);

  const data_lang = localStorage.getItem("myLanguage");
  const { t } = useTranslation();

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
    <div className={styles.faqs}>
      <div className={styles.wrapper} style={textAlign()}>
        <h2 className={`${styles.h2}`} style={textAlign()}>
          {t("pricing.FAQ.headline")}
        </h2>
        <div className={styles.accordion}>
          {faq_data.map((i, index) => (
            <div className={styles.items} key={index}>
              <div className={styles.title} onClick={() => toggle(i)}>
                <h6 className={styles.h6} style={textAlign()}>
                  {t(i.question)}
                </h6>
                <span className={styles.span}>
                  {selected === i ? (
                    <i className="fas fa-angle-up"></i>
                  ) : (
                    <i className="fas fa-angle-down"></i>
                  )}
                </span>
              </div>
              {selected === i && (
                <div
                  className={selected === i ? "answer show" : "answer"}
                  onClick={() => toggle(i)}
                >
                  {t(i.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.billing} style={textAlign()}>
          {t("pricing.FAQ.link_info")}{" "}
          <a className={styles.info} href="/faq" style={textAlign()}>
            {t("pricing.FAQ.link")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;

// .

// <tr className={styles.pricingTableRowFeature}>
//        <td colSpan="2" className={styles.colStart}></td>

// <td className={styles.pricingtableSpacer}></td>

// <td className={`{stles.pricingtableSpacer} {styles.lastColumn}`}></td>

// <tr className={styles.pricingTableRowFeature}>
//                 <td colSpan="2" className={styles.colStart}></td>

// .
