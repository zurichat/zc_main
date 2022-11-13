import styles from "../../styles/section2.module.css";
import hotelsng from "../../assets/hotelsng_logo.svg";
import ingressive4good from "../../assets/i4g_logo.svg";
import camphouse from "../../assets/camphouse_logo.svg";
import zuritraining from "../../assets/zuri_training_logo.svg";

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.section2Wrapper}>
        <div className={styles.section2TopTextWrapper}>
          <p>Trusted by top companies worldwide</p>
        </div>
        <div className={styles.section2CompanyLogosWrapper}>
          <div className={styles.imageWrapper}>
            <img src={hotelsng} alt="hotel.ng logo" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={ingressive4good} alt="ingressive4good logo" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={camphouse} alt="camphouse logo" />
          </div>
          <div className={styles.imageWrapper}>
            <img src={zuritraining} alt="zuri training logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
