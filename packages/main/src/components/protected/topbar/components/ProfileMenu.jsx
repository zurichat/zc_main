import React from "react";
import style from "../styles/ProfileMenu.module.css";

export const ProfileMenu = () => {
  return (
    <div className={style.profilemenu}>
      <div className={style.profilemenu__header}>
        <div className={style.profilemenu__thumbnail}>
          <img
            src="https://res.cloudinary.com/benjee/image/upload/v1630353205/19WqPjcVaNc_xtb0cj.png"
            alt=""
          />
        </div>
        <div className={style.profilemenu__title}>
          <p className={style.profilemenu__name}>Praise.A</p>
          <p className={style.online__presence}>
            <span className={style.badge}></span>Active
          </p>
        </div>
      </div>
    </div>
  );
};
