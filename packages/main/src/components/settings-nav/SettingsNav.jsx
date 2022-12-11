import React, { useState, useContext } from "react";

import styles from "../settings-nav/SettingsNav.module.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import zuri from "../settings-nav/assets/zuri.svg";
import navImage from "../settings-nav/assets/navImage.png";

const SettingsNav = () => {
  const [menu, setMenu] = useState(false);

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
        </div>
      </div>
    </div>
  );
};

export default SettingsNav;
