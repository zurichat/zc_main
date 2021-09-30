import React from "react";

import styles from "../styles/adminHead.module.css";
import {Link} from "react-router-dom";
import { FiHome } from 'react-icons/fi';

// icons
import zuriLogo from "../assets/zuriLogo.svg";
import grid from "../assets/grid.svg";
import bouy from "../assets/bouy.svg";
import la_rocket from "../assets/la_rocket.svg";

const AdminHeader = () => {
    return (
        <div className={styles.adminHeader}>
            <div className={styles.organizationLogo}>
                <FiHome className={styles.icons} />
                HNG i8
            </div>
            <div className={styles.menu}>
                <Link className={styles.menuLink} to="/">
                    <img className={styles.menuImg} src={la_rocket} alt="rocket icon" />
                    Plans 
                </Link>
                <Link className={styles.menuLink} to="/">
                    <img className={styles.menuImg} src={grid} alt="grid icon" />
                    Workspaces
                </Link>
                <Link className={styles.menuLink} to="/">
                    <img className={styles.menuImg} src={bouy} alt="bouy icon" />
                    Help
                </Link>
                <Link className={styles.menuLink} to="/">
                    <img className={styles.menuImg} src={zuriLogo} alt="zuri icon" />
                    Launch
                </Link>
            </div>
        </div>
    )
}

export default AdminHeader