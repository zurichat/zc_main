import React from "react";
import style from "../../LandingPage/styles/LandingPage.module.css";
import hotels from "../../LandingPage/assets/hotels.svg";
import ingress from "../../LandingPage/assets/ingress.svg";
import camphouse from "../../LandingPage/assets/camphouse.svg";
import logo_zuri from "../../LandingPage/assets/logo_zuri.svg";
import { useTranslation } from "react-i18next";

export const Companies = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={`${style.company_banner_wrap}`}>
        <div className={`${style.company_banner}`}>
          <p className={`${style.cbp}`}>{t("about_trusted_text")}</p>
          <div className={`${style.logos}`}>
            <img src={hotels} alt="" className={`${style.logo}`} />
            <img src={ingress} alt="" className={`${style.logo}`} />
            <img src={camphouse} alt="" className={`${style.logo}`} />
            <img src={logo_zuri} alt="" className={`${style.logo}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
