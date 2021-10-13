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
            Legal Page is Under Development.
          </h1>
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
