import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/workspace.module.css";
import FemaleSprite from "../assets/jw_female.svg";

import { useTranslation } from "react-i18next";

const JoinWorkspaceCard = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.joinworkspace_container}`}>
      <div className={`${styles.sprite_container}`}>
        <img src={FemaleSprite} />
      </div>
      <p>{t("workspace.space.join_line")}</p>
      <Link to="/create-workspace">
        <button>{t("workspace.space.joinbtn")}</button>
      </Link>
    </div>
  );
};

export default JoinWorkspaceCard;
