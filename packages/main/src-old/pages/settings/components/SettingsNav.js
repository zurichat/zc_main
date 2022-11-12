import React, { useState, useContext } from "react";
import { TopbarContext } from "../../../context/Topbar";

import styles from "../styles/settingsNav.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import zuri from "../assets/zuri.svg";
import navImage from "../assets/navImage.png";

const SettingsNav = () => {
  const [menu, setMenu] = useState(false);
  // const state = useContext(TopbarContext)
  // const [active] = state.presence

  return (
    <div className={styles.containers}>
      <div className={styles.accountbar}>
        <Link to="/home">
          <div className={styles.brand}>
            <img src={zuri} alt="Zuri logo" />
          </div>
        </Link>

        <div className={styles.menubars} onClick={() => setMenu(!menu)}>
          <BiMenuAltRight />
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search here"
          />
        </div>
      </div>

      <div className={styles.rightnav}>
        <div className={styles.pImage}>
          <img src={navImage} alt="Profile" className={styles.profileImg} />
          {/* {active ? (
            <div className={styles.circles}></div>
          ) : (
            <div className={styles.circleAway}></div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SettingsNav;
