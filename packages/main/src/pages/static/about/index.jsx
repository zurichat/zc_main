import React from "react";
import { Link } from "react-router-dom";
import { TopNavigationBar, Footer } from "../../../components";
import styles from "./About.module.css";
import {
  team,
  hands,
  user,
  group,
  vector,
  user2,
  channel,
  holiday,
  deadline,
  quick,
  todos,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  hng,
  zuriTraining,
  zuriInternship,
  I4G
} from "./assets";
import Carousel from "./component/CarouselImg";
import CarouselSecond from "./component/SecondCarousel";

import { useTranslation } from "react-i18next";
// end of image import
const About = () => {
  const people = [
    {
      id: 1,
      image: Card1,
      name: "Seyi Onifade",
      role: "Founder & CEO"
    },
    {
      id: 2,
      image: Card2,
      name: "Chikere Aku-Ibe",
      role: "Program Co-ordinator"
    },
    {
      id: 3,
      image: Card3,
      name: "Ande Olorunimodimu",
      role: "Program Manager"
    },
    {
      id: 4,
      image: Card4,
      name: "Clariet Johnson",
      role: "Program Manager"
    },
    {
      id: 5,
      image: Card5,
      name: "Malik Cradford",
      role: "Head of Engineering"
    },
    {
      id: 6,
      image: Card6,
      name: "Jane Praise",
      role: "Chief Operating Officer"
    }
  ];

  const { t } = useTranslation();
  return (
    <div>
      <TopNavigationBar />
      <div className={`container mb-5`}>
        <div className={`${styles.banner}`}>
          <h1>
            {t("about.banner.headline_one")} <br />
            {t("about.banner.headline_two")}
          </h1>
          <p>ZuriChat {t("about.banner.description")}</p>
        </div>
        <div
          className={`row flex align-items-center justify-content-center pt-3 ${styles.counter_div}`}
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
      {/* What we do */}
      <div className={`container mb-5 ${styles.to_join}`}>
        <div className={`${styles.what_we_do}`}>
          <div className={`col-lg-6  ${styles.team}`}>
            <img src={team} alt={"image of teams"} srcSet="" />
          </div>
          <div className={`col-lg-6 ${styles.join_us}`}>
            <h3 className={` ${styles.h3m}`}>
              {t("about.whatWeDo.title")} <br />
            </h3>
            <p>
              <span className={` ${styles.span}`}>ZuriChat</span>{" "}
              {t("about.whatWeDo.description")} <br />
            </p>
            {/* <p>
              <span className={` ${styles.span}`}>ZuriChat</span>{" "}
              {t("about.whoWeAre.description_")}
            </p> */}
          </div>
        </div>
      </div>
      {/* our mission */}
      <div className={`container mb-5 ${styles.to_join}`}>
        <div className={`${styles.team__container}`}>
          <div className={`col-lg-6  ${styles.team}`}>
            <img src={hands} alt={"image of teams"} srcSet="" />
          </div>
          <div className={`col-lg-6 ${styles.join_us}`}>
            <h3 className={` ${styles.h3m}`}>
              {t("about.ourMission.title")} <br />
            </h3>
            <p>
              {t("about.ourMission.description")} <br />
            </p>
            <p>
              <span className={` ${styles.span}`}>ZuriChat</span>{" "}
              {t("about.ourMission.description_")}
            </p>
          </div>
        </div>
      </div>
      {/* whatever work you do, you can do it in zurichat  */}
      <div className={`container-fluid ${styles.zurichat}`}>
        <div className={`${styles.zurichat_section}`}>
          <div className={`${styles.signup_cta}`}>
            <h3 className={`${styles.zurichat_text}`}>
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
      {/* our team */}
      <div>
        <h1 className="text-center">Meet the team</h1>
        <div className={`container mb-5 ${styles.team_grid}`}>
          {people.map(person => (
            <div
              key={person.id}
              className={`container ${styles.team_grid_item}`}
            >
              <img src={person.image} className="" alt="" />
              <div className={`${styles.team_grid_item_info}`}>
                <h3 className="">{person.name}</h3>
                <p className="">{person.role}</p>
              </div>
            </div>
          ))}
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
        {/* <Carousel /> */}
        <div className={`${styles.desktop_carousel}`}>
          <div className={`${styles.working_remote_section}`}>
            <img src={channel} alt={"centralized space"} />
            <h6>{t("about.highlights.channels.title")}</h6>
            <p>
              {t("about.highlights.channels.description")} <br />
              {t("about.highlights.channels.description_")}
            </p>
          </div>
          <div className={`${styles.working_remote_section}`}>
            <img src={holiday} alt={"image of calender"} />
            <h6>{t("about.highlights.holidayCalender.title")}</h6>
            <p>
              {t("about.highlights.holidayCalender.description")} <br />
              {t("about.highlights.holidayCalender.description_")}
            </p>
          </div>
          <div className={`${styles.working_remote_section}`}>
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
          <div className={`${styles.working_remote_section}`}>
            <img src={quick} alt={"image of quick reply app"} />
            <h6>{t("about.highlights.quickReply.title")}</h6>
            <p>
              {t("about.highlights.quickReply.description")}
              <br />
              {t("about.highlights.quickReply.description_")} <br />
            </p>
          </div>
          <div className={`${styles.working_remote_section}`}>
            <img src={todos} alt={"image to do list"} />
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
      {/* <CarouselSecond className={styles.carouselCaption} /> */}
      <div
      // className={`container-fluid ${styles.second_carousel_block} mb-5 container`}
      >
        <div className={`${styles.special_features}`}>
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
              <br />
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
      {/* trusted by these companies */}
      <div>
        <h1 className="text-center">Trusted By</h1>
        <div className={`container ${styles.trusted_companies}`}>
          <img src={zuriInternship} alt="" />
          <img src={zuriTraining} alt="" />
          <img src={I4G} alt="" />
          <img src={hng} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
