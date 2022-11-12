import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// styles import
import styles from "../about/styles/about.module.css";
import { Companies } from "./component/Companies";
// images
import team from "./asset/Collab-pana 2.svg";
import user from "./asset/user 2.svg";
import group from "./asset/Group.svg";
import vector from "./asset/Vector.svg";
import user2 from "./asset/user 2-1.svg";
import channel from "./asset/Group 35468-1.svg";
import holiday from "./asset/Group 35468.svg";
import deadline from "./asset/Group 35470.svg";
import quick from "./asset/Group 35471.svg";
import todo from "./asset/Group 35472.svg";
import Carousel from "./component/CarouselImg";
import CarouselSecond from "./component/SecondCarousel";

// import i18n (needs to be bundled ;))
import "../../i18n";
import { useTranslation } from "react-i18next";
// end of image import
const index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div className={`container mb-5`}>
        <div className={`${styles.banner}`}>
          <h1>
            {t("about.banner.headline_one")} <br />
            {t("about.banner.headline_two")}
          </h1>
          <p>ZuriChat {t("about.banner.description")}</p>
        </div>
        <div
          className={`row flex align-items-center justify-content-center pt-3`}
        >
          <div className={`col-lg-4 col-md-4 col-sm-4 ${styles.counter}`}>
            <h3>100k+</h3>
            <p>
              {t("about.counter.customers")} <br />
              {t("about.counter.customers_")}
            </p>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${styles.counter}`}>
            <h3>50</h3>
            <p>
              {t("about.counter.fortune_companies")} <br />
              {t("about.counter.fortune_companies_")} ZuriChat
            </p>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${styles.counter}`}>
            <h3>50+</h3>
            <p>
              {t("about.counter.countries")} <br />
              {t("about.counter.countries_")} ZuriChat
            </p>
          </div>
        </div>
      </div>
      {/* COMPANIES */}
      {/* <Companies /> */}
      {/* Who we are and how to join us */}
      <div className={`container mb-5 ${styles.to_join}`}>
        <div className={`row pt-3`}>
          <div className={`col-lg-6  ${styles.team}`}>
            <img src={team} alt={"image of teams"} srcSet="" />
          </div>
          <div className={`col-lg-6 text-start ${styles.join_us}`}>
            <h3 className={`text-start ${styles.h3m}`}>
              {t("about.whoWeAre.title")} <br />
            </h3>
            <p className="text-start">
              {t("about.whoWeAre.description")} <br />
            </p>
            <p>
              <span className={`text-start ${styles.span}`}>ZuriChat</span>{" "}
              {t("about.whoWeAre.description_")}
            </p>
          </div>
        </div>
      </div>
      {/* work remotely more intriging than ever  */}
      <div className={`container mb-5`}>
        <div className={`col-lg-12 ${styles.working_remote}`}>
          <h3>{t("about.highlights.title")}</h3>
          <p>
            {t("about.highlights.description")} <br />
            {t("about.highlights.description_")}
          </p>
        </div>
        {/* Carousel for mobile view  */}
        <Carousel />
        <div className={`row pt-3 ${styles.desktop_carousel}`}>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={channel} alt={"centralized space"} />
            <h6>{t("about.highlights.channels.title")}</h6>
            <p>
              {t("about.highlights.channels.description")} <br />
              {t("about.highlights.channels.description_")}
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={holiday} alt={"image of calender"} />
            <h6>{t("about.highlights.holidayCalender.title")}</h6>
            <p>
              {t("about.highlights.holidayCalender.description")} <br />
              {t("about.highlights.holidayCalender.description_")}
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={deadline} alt={"image of alarm clock"} />
            <h6> {t("about.highlights.companyDeadline.title")}</h6>
            <p>
              {t("about.highlights.companyDeadline.description")}
              <br />
              {t("about.highlights.companyDeadline.description_")}
              <br />
              feature.
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={quick} alt={"image of quick reply app"} />
            <h6>{t("about.highlights.quickReply.title")}</h6>
            <p>
              {t("about.highlights.quickReply.description")}
              <br />
              {t("about.highlights.quickReply.description_")} <br />
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={todo} alt={"image to do list"} />
            <h6>{t("about.highlights.todoList.title")}</h6>
            <p>
              {t("about.highlights.todoList.description")}
              <br />
              {t("about.highlights.todoList.description_")} <br />
            </p>
          </div>
        </div>
      </div>

      {/* special features you need  */}
      <div className={`${styles.working_remote}`}>
        <h3>{t("about.features.title")}</h3>
        <p>{t("about.features.description")}</p>
      </div>
      <CarouselSecond className={styles.carouselCaption} />
      <div
        className={`container-fluid ${styles.second_carousel_block} mb-5 container`}
      >
        <div className={`row pt-3`}>
          <div className={`col ${styles.vector}`}>
            <img src={user} alt={"image of a user"} />
            <h6 className={``}>{t("about.features.avatar.title")}</h6>
            <p>{t("about.features.avatar.description")}</p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={group} alt={"image of a company file"} />
            <h6 className={``}>{t("about.features.files.title")}</h6>
            <p>
              {t("about.features.files.description")}
              <br />.
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={vector} alt={"accessibility image"} />
            <h6 className={``}>{t("about.features.accessibility.title")}</h6>
            <p>
              {t("about.features.accessibility.description")} <br />
              {t("about.features.accessibility.description_")}
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={user2} alt={"image of target board"} />
            <h6 className={``}>{t("about.features.goals.title")}</h6>
            <p>
              {t("about.features.goals.description")} <br />
              {t("about.features.goals.description_")}
            </p>
          </div>
        </div>
      </div>
      {/* whatever work you do, you can do it in zurichat  */}
      <div className={`container-fluid ${styles.zurichat}`}>
        <div className={`${styles.zurichat_section}`}>
          <div className="signup-cta">
            <h3 className="text">
              Zuri Chat is a modern world platform that makes communicating with
              your team or organization faster, easier and more fun. Want to
              explore?
            </h3>
            <Link to="/signup">
              <button className={` ${styles.btn_sale}`}>GET STARTED</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
