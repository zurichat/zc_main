import React, { Fragment } from "react"
import style from "./styles/whyzurichat.module.css"
import texting from "./assets/undraw_Texting_re_l11n.svg"
import stat from "./assets/undraw_Site_stats_re_ejgy.svg"
import organize from "./assets/undraw_Organize_resume_re_k45b.svg"
import message from "./assets/undraw_Messages_re_qy9x.svg"
import storage from "./assets/undraw_Memory_storage_reh0.svg"
import support from "./assets/undraw_Active_support_re_b7sj.svg"
import team from "./assets/undraw_good_team_m7uu.svg"
import HeaderSearchSuggestion from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"
function Whyzurichat() {
  const title = "Meet ZuriChat - affordable Slack alternative"

  return (
    <Fragment>
      <HeaderSearchSuggestion />
      <div className={style.blog_container}>
        <section className={`${style.hero_blog}`}>
          <div className={`${style.max_width} ${style.hero_section}`}>
            <div className={style.hero_writeup}>
              <h1 className={style.hero_title}> {title}</h1>
              <p className={style.hero_paragraph}>
                If you are searching for the perfect Slack alternative, look no
                further.
                <br />
                ZuriChat is on a mission to simplify individuals work life and
                productivity
                <br /> with an intruiging collaborative hub powered by Web3/DAO.{" "}
              </p>
            </div>
            <div className={style.blog_img}>
              <img src="https://zuri.chat/bc07b4fa73a79c224dd2.svg" alt="" />
            </div>
          </div>
        </section>

        <div className={`${style.blog__content__header} ${style.max_width}`}>
          <h2> Why ZuriChat?</h2>
        </div>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Clarity</h2>
                <p>
                  Proicient task execution is key to driving your business
                  forward, and ZuriChat helps you get more done. Our Company
                  Deadline plugin makes Task Management easy for collaborations
                  of all sizes, from startups to global firms. Optimize your
                  workflows by tracking status, monitoring progress, and
                  discussing issues.
                </p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={organize} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={stat} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Speed</h2>
                <p>
                  ZuriChat understands that time is money in the business world.
                  Our ZuriChat Dm Reply plugin alternative saves you time spent
                  on communication. That need for speed is satisfied by
                  optimization of Real-time communication, twice faster file
                  sharing and customized notifications, so you never miss a
                  thing; announcements, task status updates, calls, etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Retentive Capacity</h2>
                <p>
                  Every company or a team needs room to grow. When it comes to
                  file storage, the best Slack alternative for you is also
                  ZuriChat as we provide all our customers with twice more room
                  for file storage in Zuri Company Files making it twice doubly
                  convenient for you to store and share multiple files when
                  collaborating within your team.
                </p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={texting} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={team} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Optimized Productivity</h2>
                <p>
                  Improve your team's performance. ZuriChat is designed to boost
                  collaboration and <br />
                  reduce the rtime spend on meetings, emails and communication
                  between colleagues{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Superb Ease</h2>
                <p>
                  We won’t overload you with confusing or distracting features.
                  ZuriChat is an easy to start and easy to use team-hub with
                  intuitive and crystal clear user interface
                </p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={storage} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__right} ${style.max_width}`}>
            <div className={style.card__right__image}>
              <div className={style.blog_img}>
                <img src={message} alt="" />
              </div>
            </div>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Unlimited Message Retention</h2>
                <p>
                  Never miss a single message. ZuriChat Dm Reply is accessible
                  from the first message Whatever's written in ZuriChat stays in
                  ZuriChat. No hidden costs. No limits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={style.card_container}>
          <div className={`${style.card__left} ${style.max_width}`}>
            <div className={style.card__write__up}>
              <div className={style.text__wrap}>
                <h2>Always available to Help</h2>
                <p>
                  Hit a snag? Got a question? Our 24/7 HelpTeam will take extra
                  steps to ensure you have an easy and pleasurable experience
                  with ZuriChat
                </p>
              </div>
            </div>
            <div className={style.card__left__image}>
              <div className={style.blog_img}>
                <img src={support} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.bottom_container}>
          <div className={style.max_width}>
            <div className={style.bottom_card}>
              <p>
                Your Team will enjoy <strong>ZuriChat</strong>{" "}
              </p>
              <Link to="/signup" className={style.bottom_link}>
                Sign up
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Whyzurichat
