import React from "react";
import styles from "../styles/CareerGrid.module.css";
import { useTranslation } from "react-i18next";

const CareerGrid = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={`${styles.headerContent}`}>
        <h2 className={`${styles.center}`}>
          {t("careers.career_grid.headline")}
        </h2>
        <p>{t("careers.career_grid.post_headline")}</p>
      </div>
      <div className={`${styles.categories}`}>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t("careers.career_grid.categories.category_frontend.headline")}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_frontend.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
        </div>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t("careers.career_grid.categories.category_backend.headline")}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_backend.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>PHP</li>
            <li>Python</li>
            <li>NodeJS</li>
            <li>Go</li>
          </div>
        </div>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t("careers.career_grid.categories.category_design.headline")}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_design.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>UI/UX</li>
          </div>
        </div>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t("careers.career_grid.categories.category_mobile.headline")}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_mobile.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>Flutter</li>
            <li>Kotlin</li>
          </div>
        </div>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t(
                "careers.career_grid.categories.category_digital_marketing.headline"
              )}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_digital_marketing.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>SEO</li>
          </div>
        </div>
        <div className={`${styles.category}`}>
          <div className={`${styles.subcategory}`}>
            <h3>
              {t("careers.career_grid.categories.category_frameworks.headline")}
            </h3>
            <p>
              {t(
                "careers.career_grid.categories.category_frameworks.post_headline"
              )}
            </p>
          </div>
          <div className={`${styles.flex}`}>
            <li>Laravel</li>
            <li>Django</li>
            <li>ReactJS</li>
          </div>
        </div>
      </div>
      <div className={`${styles.cohort}`}>
        {t("careers.career_grid.join_cohort")}
      </div>
      <div className={`${styles.register}`}>
        <button className={`${styles.btngreen}`}>
          {t("careers.career_grid.register_now")}
        </button>
      </div>
    </div>
  );
};

export default CareerGrid;
