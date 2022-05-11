import styles from "../component-styles/Security.module.css";
import padlock from "../component-assets/padlock.png";
import padlockSVG from "../component-assets/padlock.svg";
import dataProtectionIcon from "../component-assets/data-protection.svg";
import approvedIcon from "../component-assets/approved.svg";

function Security() {
  return (
    <>
      <div
        className={`${styles.container} my-3 d-flex flex-md-row flex-column m-auto container`}
      >
        <div className={`col-md-6 col-12`}>
          <h6>SECURITY AT ZURI</h6>
          <h1 className={styles.h1}>Enterprise-grade data Protection</h1>
          <h4>
            Trust Zuri to keep your data secure and meet your compliance
            requirement
          </h4>
          <button
            className={`btn btn-success ${styles.button} col-md-6 col-12`}
          >
            {" "}
            View Data Sheet
          </button>
        </div>
        <div className={`col-md-6 col-12 my-3 my-md-0 text-center text-md-end`}>
          <img
            className={styles.padlock_img}
            src={padlock}
            height={250}
            width={280}
            alt="padlock"
          />
        </div>
      </div>
      <div className={`my-3 py-5 container`}>
        <h2 className={`text-center`}>
          Security features for more control, visibility and flexibility
        </h2>
        <div className={`d-flex flex-md-row flex-column`}>
          <div
            className={`col-md-4 px-2 text-center text-md-start my-1 col-12`}
          >
            <img
              className={`py-3 ${styles.image}`}
              src={padlockSVG}
              alt="padlock"
            />
            <h3 className={styles.h3}>Identity and device management</h3>
            <p className={`px-0 ${styles.p}`}>
              Ensure that only the right people and approved devices can access
              your company’s information in Slack with features like single
              sign-on, domain claiming and support for enterprise mobility
              management.
            </p>
          </div>
          <div
            className={`col-md-4 px-2 text-center text-md-start my-1 col-12`}
          >
            <img
              className={`py-3 ${styles.image}`}
              src={dataProtectionIcon}
              alt="padlock"
            />
            <h3 className={styles.h3}>Data protection</h3>
            <p className={`px-0 ${styles.p}`}>
              Ensure that only the right people and approved devices can access
              your company’s information in Slack with features like single
              sign-on, domain claiming and support for enterprise mobility
              management.
            </p>
          </div>
          <div
            className={`col-md-4 px-2 text-center text-md-start my-1 col-12`}
          >
            <img
              className={`py-3 ${styles.image}`}
              src={approvedIcon}
              alt="padlock"
            />
            <h3 className={styles.h3}>Information governance</h3>
            <p className={`px-0 ${styles.p}`}>
              Ensure that only the right people and approved devices can access
              your company’s information in Slack with features like single
              sign-on, domain claiming and support for enterprise mobility
              management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
