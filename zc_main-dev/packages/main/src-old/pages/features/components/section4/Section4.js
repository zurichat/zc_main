import styles from "../../styles/Section4.module.css";
import chessboard from "../../assets/chessboard_image.svg";
const Section4 = () => {
  return (
    <div className={styles.section4}>
      <div className={styles.section4Wrapper}>
        <div className={styles.leftSideContentWrapper}>
          <img
            src={chessboard}
            alt="Chessboard"
            className={styles.chessboardImage}
          />
        </div>
        <div className={styles.rightSideContentWrapper}>
          <div className={styles.rightSideTextWrapper}>
            <h2>Beyond a workspace, Have fun while you work</h2>
            <p>
              With zuri Chat, you can unwind after long hours of work with our
              special games and music Features. Reduce distractions, maintain
              productivity level. Engage your team mates in gaming competitions,
              listen to music in the music room and have great fun with team
              members and build team-spirit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
