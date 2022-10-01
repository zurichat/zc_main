import styles from "../../styles/Section1.module.css";
import heroImage from "../../assets/feature_hero_image.svg";

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.section1Wrapper}>
        <div className={styles.section1LeftContentWrapper}>
          <div className={styles.section1TextWrapper}>
            <h4>Zuri Chat Features</h4>
            <h2>A platform for your team, work and fun.</h2>
            <p>
              Build the right connection with your team by using special
              features like Channels, DMs to complete your work goals.
            </p>
            <div className={styles.buttonsWrapper}>
              <button
                type="button"
                className={`${styles.getStarted} ${styles.featuresSection1Buttons}`}
                onClick={e => {
                  e.preventDefault();
                  window.location.replace("https://zuri.chat/signup");
                }}
              >
                Get Started
              </button>
              <button
                type="button"
                className={`${styles.features} ${styles.featuresSection1Buttons}`}
                onClick={e => {
                  e.preventDefault();
                  window.location.replace("#featuresSection");
                }}
              >
                See all Features
              </button>
            </div>
          </div>
        </div>
        <div className={styles.section1ImageWrapper}>
          <img src={heroImage} alt="group" className={styles.groupImage} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
