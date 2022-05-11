import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "react-loader-spinner";

import styles from "../styles/adminOverview.module.css";
import { authAxios } from "../Utils/Api";

import { getUser, getCurrentWorkspace } from "../Utils/Common";

// icons
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { CardContext } from "../../../context/CardContext";

const OverviewTab = ({ setActive, setOpenTab, openTab }) => {
  const currentWorkspace = getCurrentWorkspace();
  const { token, setToken } = useContext(CardContext);
  const user = getUser();
  const [workspaceData, setWorkspaceData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [orgSize, setOrgSize] = React.useState(0);

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
          setToken(res.data.data.tokens);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [currentWorkspace, modal]);

  const openModal = () => {
    authAxios
      .get(`/organizations/${currentWorkspace}/members`)
      .then(res => {
        setOrgSize(res.data.data.length);
      })
      .catch(err => {
        console.error(err);
      });
    setModal(!modal);
  };

  const handlePlan = () => {
    setLoading(true);

    authAxios
      .post(`/organizations/${currentWorkspace}/upgrade-to-pro`)
      .then(res => {
        setLoading(false);
        // console.log(res.data)
        toast.success(res.data.message, {
          position: "top-center"
        });
        setModal(false);
      })
      .catch(err => {
        setLoading(false);
        toast.error(err?.response?.data?.message, {
          position: "top-center"
        });
      });
  };

  return (
    <div className={styles.plansContainer}>
      {/* modal */}
      <div className={modal ? styles.modalActive : styles.modal}>
        <div onClick={() => setModal(!modal)} className={styles.overlay} />
        <div className={styles.modalContainer}>
          <h6 className={styles.modalSubHead}>{token} Tokens left</h6>
          <h3 className={styles.modalHeading}>
            {orgSize * 10} Tokens will be deducted from your wallet
          </h3>
          <p className={styles.modalParagraph}>
            10 token will be deducted per every member in your organization, Are
            you sure you want to continue?
          </p>
          <div className={styles.buttonWrapper}>
            <button
              onClick={() => setModal(!modal)}
              className={styles.btnSecondary}
            >
              Cancel
            </button>
            <button onClick={handlePlan} className={styles.btnPrimary}>
              Upgrade
            </button>
          </div>
        </div>
      </div>
      <div className={styles.tokenAmount}>
        <span>{token} &nbsp;</span>
        tokens
        <AiOutlineInfoCircle className={styles.infoIcon} />
      </div>

      <div className={styles.plansContent}>
        <h1 className={styles.plansHeader}>
          Your workspace is currently on the{" "}
          <b className={styles.bold}>
            {workspaceData.version === "pro" ? "Pro Plan" : "Free Plan"}
          </b>
        </h1>
        <div className={styles.buttonWrapper}>
          <button
            onClick={openModal}
            disabled={workspaceData.version === "pro"}
            className={styles.mainCta}
          >
            {loading ? (
              <Loader type="ThreeDots" color="#fff" height={40} width={40} />
            ) : (
              "Subscribe to a plan"
            )}
          </button>
        </div>

        <div className={styles.plansDetails}>
          <h6 className={styles.subHeading}>
            With a Zuri Chat paid plan, you team gets:
          </h6>

          <ul className={styles.planList}>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited message archive
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of apps
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of plugins
            </li>
            <li className={styles.listItem}>
              <FiCheck className={styles.checkIcon} />
              An unlimited number of songs and game time
            </li>
            <li className={styles.listItemGreen}>See all top features</li>
          </ul>
          <p className={styles.getToken}>
            Don’t have enough tokens?{" "}
            <span
              onClick={() => {
                setActive(5);
                setOpenTab(!openTab);
              }}
              className={styles.cta}
            >
              Buy now
            </span>
          </p>
        </div>
      </div>

      <div className={styles.planCta}>
        <div className={styles.info}>
          <h6 className={styles.infoHeader}>Zuri Chat Pro Plan</h6>
          <p className={styles.infoBody}>Do More. Anytime.</p>
        </div>
        <div className={styles.buttonCont}>
          <button className={styles.btnSecondary}>Learn More</button>
          <button
            onClick={openModal}
            disabled={workspaceData.version === "pro"}
            className={styles.btnPrimary}
          >
            {loading ? (
              <Loader type="ThreeDots" color="#fff" height={40} width={40} />
            ) : (
              "Upgrade"
            )}
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Visit our Help Center to see if you qualify for a discounted plan.
        </p>

        <p className={styles.footerLink}>
          Have a promo code?{" "}
          <span className={styles.footerLinkSpan}>Enter it here</span>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default OverviewTab;
