import React from "react";
import LinkComponent from "../../../components/Link";
import styles from "../styles/Section4.module.css";

const DummyData = [
  { ok: "ok" },
  { yeah: "yeah" },
  { now: "now" },
  { then: "then" }
];

const Section4PricingPage = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div>
          <h2 className={`text-center topText`}>You're in good company</h2>
          <p className={`py-3 text-center`}>
            Teams of every size , shape and kind have already made Slack the
            place where their work happens
          </p>
          <div className={styles.link}>
            <LinkComponent
              className={`py-3 p-auto`}
              title={`View all customer stories`}
              to={`/customer-stories`}
              color={`#00B87C`}
            />
          </div>
        </div>

        <div className={`${styles.cardContainer}`}>
          <>
            <div className={`${styles.card}`}>
              <img
                className={`${styles.imgTop}`}
                alt="light"
                src={
                  "https://res.cloudinary.com/ujuzi/image/upload/v1630463006/Cars%20Images%20project/pexels-kampus-production-8353777_wjgvrh.jpg"
                }
              />
              <div className={styles.bottomCardSub1}>
                <p>INTUIT</p>
              </div>
              <div className={styles.bottomCardSub2}>
                eCommerce platform deploys super bot to enable glitch-free
                purchases
              </div>
              <div className={styles.bottomCardSub3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
            <div className={`${styles.card}`}>
              <img
                className={`${styles.imgTop}`}
                alt="light"
                src={
                  "https://res.cloudinary.com/ujuzi/image/upload/v1630463006/Cars%20Images%20project/pexels-kampus-production-8353777_wjgvrh.jpg"
                }
              />
              <div className={styles.bottomCardSub1}>
                <p>INTUIT</p>
              </div>
              <div className={styles.bottomCardSub2}>
                eCommerce platform deploys super bot to enable glitch-free
                purchases
              </div>
              <div className={styles.bottomCardSub3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
            <div className={`${styles.card}`}>
              <img
                className={`${styles.imgTop}`}
                alt="light"
                src={
                  "https://res.cloudinary.com/ujuzi/image/upload/v1630463006/Cars%20Images%20project/pexels-kampus-production-8353777_wjgvrh.jpg"
                }
              />
              <div className={styles.bottomCardSub1}>
                <p>INTUIT</p>
              </div>
              <div className={styles.bottomCardSub2}>
                eCommerce platform deploys super bot to enable glitch-free
                purchases
              </div>
              <div className={styles.bottomCardSub3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
            <div className={`${styles.card}`}>
              <img
                className={`${styles.imgTop}`}
                alt="light"
                src={
                  "https://res.cloudinary.com/ujuzi/image/upload/v1630463006/Cars%20Images%20project/pexels-kampus-production-8353777_wjgvrh.jpg"
                }
              />
              <div className={styles.bottomCardSub1}>
                <p>INTUIT</p>
              </div>
              <div className={styles.bottomCardSub2}>
                eCommerce platform deploys super bot to enable glitch-free
                purchases
              </div>
              <div className={styles.bottomCardSub3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Section4PricingPage;
