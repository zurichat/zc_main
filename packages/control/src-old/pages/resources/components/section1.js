import styles from "../styles/Section1.module.css";
import image1 from "../assests/Vectary texture.png";
import image2 from "../assests/icons8-slider-50.png";

const Section1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="pt-5 mt-3">
          <h2 className={styles.title}>
            Welcome to the Zurichat's <br /> Resources page.
          </h2>
          <span className={styles.filter}>
            Filter content <img src={image2} alt="Filter icon" width="20px" />{" "}
          </span>
          <h6 className="mb-2 pb-5">
            Browse resources tailored to your team, your needs and all the ways
            you can get more out of Zurichat's.
          </h6>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-4">
              <img src={image1} className={styles.img} alt=" macbook pro" />
            </div>
            <div className="col-lg-4 col-sm-8 pb-5">
              <a className={styles.a} href="/">
                The 2021 Workplace Learning Report
              </a>
              <p className={styles.info}>
                Explore insights, strategies, and stories to inspire skill
                building at your organization. Explore report.
              </p>
              <p>
                Workspace administration Learn how to manage your Slack
                workspace or Enterprise Grid org.
              </p>
            </div>
            <div className={`col-lg-3 col-sm-8 ${styles.second}`}>
              <h5 className="pt-1">Guide</h5>
              <a className={styles.a} href="/">
                The digital-first toolkit
              </a>
              <p>
                Leading organizations share their tips for supporting workplace
                collaboration—no matter where or when that work happens <br />
                <span className={styles.info}>Read more.</span>
              </p>
              <hr className={styles.sm_hide} />
              <span className={styles.sm_hide}>
                <a className={styles.a} href="/">
                  Let's Lead the Future of Skill Building
                </a>
                <p>
                  Find the community and resources you need for the new world of
                  work.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.button_group}>
          {/* <button className={styles.previous}>&#8249;</button>
                    <button className={styles.next}>&#8250;</button> */}
          <img src="divider.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
