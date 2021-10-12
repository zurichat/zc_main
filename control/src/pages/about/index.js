import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// styles import
import styles from "../about/styles/about.module.css"
import { Companies } from "./component/Companies"
// images
import team from "./asset/Collab-pana 2.svg"
import user from "./asset/user 2.svg"
import group from "./asset/Group.svg"
import vector from "./asset/Vector.svg"
import user2 from "./asset/user 2-1.svg"
import channel from "./asset/Group 35468-1.svg"
import holiday from "./asset/Group 35468.svg"
import deadline from "./asset/Group 35470.svg"
import quick from "./asset/Group 35471.svg"
import todo from "./asset/Group 35472.svg"
import Carousel from "./component/CarouselImg"
import CarouselSecond from "./component/SecondCarousel"
// end of image import

const index = () => {
  return (
    <div>
      <Header />
      <div className={`container mb-5`}>
        <div className={`${styles.banner}`}>
          <h1>
            Make work simple, pleasant and <br />
            more productive.
          </h1>
          <p>
            ZuriChat is a collaboration hub that brings the right people and
            tools together to get work done. From Fortune 100 companies to
            corner markets, millions of people around the world use ZuriChat to
            connect their teams, unify their systems, and drive their business
            forward.
          </p>
        </div>
        <div className={`row pt-3`}>
          <div className={`col-lg-4 ${styles.counter}`}>
            <h3>100k+</h3>
            <p>
              Paid <br />
              Customers
            </p>
          </div>
          <div className={`col-lg-4 ${styles.counter}`}>
            <h3>50</h3>
            <p>
              of the Fortune 100 <br />
              use ZuriChat
            </p>
          </div>
          <div className={`col-lg-4 ${styles.counter}`}>
            <h3>50+</h3>
            <p>
              countries have daily <br />
              active users in ZuriChat
            </p>
          </div>
        </div>
      </div>
      {/* COMPANIES */}
      {/* <Companies /> */}
      {/* Who we are and how to join us */}
      <div className={`container mb-5 ${styles.to_join}`}>
        <div className={`row pt-3`}>
          <div className={`col-lg-6 ${styles.team}`}>
            <img src={team} alt={"image of teams"} srcSet="" />
          </div>
          <div className={`col-lg-6 ${styles.join_us}`}>
            <h3>Who we are and how to join us</h3>
            <p>
              Our mission is to improve people's working life by providing a
              platform that can host a strong diverse team , of creative
              professionals who want to do the best work of their lives
            </p>
            <p>
              <span className={styles.span}>ZuriChat</span> promises all kinds
              of opportunities and a simple, pleasant and more productive
              working life.
            </p>
          </div>
        </div>
      </div>
      {/* work remotely more intriging than ever  */}
      <div className={`container mb-5`}>
        <div className={`col-lg-12 ${styles.working_remote}`}>
          <h3>Working remotely more intriguing than ever</h3>
          <p>
            ZuriChat is where work meets fun. <br />
            Connect and interact with your team efficiently from anywhere around
            the globe
          </p>
        </div>
        {/* Carousel for mobile view  */}
        <Carousel />
        <div className={`row pt-3 ${styles.desktop_carousel}`}>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={channel} alt={"centralized space"} />
            <h6>Channels</h6>
            <p>
              Organize conversations into dedicated <br />
              spaces called channels
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={holiday} alt={"image of calender"} />
            <h6>Holiday Calender</h6>
            <p>
              Add holidays, set reminders <br />
              and see all events at a glance
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={deadline} alt={"image of alarm clock"} />
            <h6>Company Deadline</h6>
            <p>
              Keep track of deadlines with <br />
              the company deadline <br />
              feature.
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={quick} alt={"image of quick reply app"} />
            <h6>Quick Reply App</h6>
            <p>
              Get swift replies to Direct <br />
              Messages <br />
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={todo} alt={"image to do list"} />
            <h6>To do List</h6>
            <p>
              Organize tasks with the to-do-list <br />
              feature <br />
            </p>
          </div>
        </div>
      </div>

      {/* special features you need  */}
      <div className={`${styles.working_remote}`}>
        <h3>Special Features</h3>
        <p>
          Increase your productivity by assembling all your work tools into one
          place
        </p>
      </div>
      <CarouselSecond className={styles.carouselCaption} />
      <div
        className={`container-fluid ${styles.second_carousel_block} mb-5 container`}
      >
        <div className={`row pt-3`}>
          <div className={`col ${styles.vector}`}>
            <img src={user} alt={"image of a user"} />
            <h6 className={``}>Animated Avatar Loungue</h6>
            <p>Create and animate your own avatar in the avatar lounge</p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={group} alt={"image of a company file"} />
            <h6 className={``}>Company Files</h6>
            <p>
              Access your files on google drive while <br /> on ZuriChat.
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={vector} alt={"accessibility image"} />
            <h6 className={``}>Accessibility</h6>
            <p>
              Be in control, Use ZuriChat and enjoy <br /> the best
              accessibility features
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={user2} alt={"image of target board"} />
            <h6 className={``}>Company Goals</h6>
            <p>
              Keep up with company goals <br />
              right inside ZuriChat
            </p>
          </div>
        </div>
      </div>
      {/* whatever work you do, you can do it in zurichat  */}
      <div className={`container-fluid ${styles.zurichat}`}>
        <div className={`${styles.zurichat_section}`}>
          <h3 className={`${styles.zurichat_h3}`}>
            Whatever work you do, you can do it in Zuri Chat
          </h3>
          <div className={`styles.button`}>
            <Link to="/contact-us">
              <button className={`btn ${styles.btn_sale} ${styles.btn}`}>
                Talk to sales
              </button>
            </Link>
            <Link to="/signup">
              <button className={`btn ${styles.btn_free} ${styles.btn}`}>
                Try it for free
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
