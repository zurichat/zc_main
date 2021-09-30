import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// styles import
import styles from '../about/styles/about.module.css'
import style from '../LandingPage/styles/LandingPage.module.css'
// images
import team from './asset/Collab-pana 2.svg'
import logo_hng from '../LandingPage/assets/logo_hng.svg'
import logo_i4g from '../LandingPage/assets/logo_i4g.svg'
import logo_camphouse from '../LandingPage/assets/logo_camphouse.svg'
import logo_zuri from '../LandingPage/assets/logo_zuri.svg'
import user from './asset/user 2.svg'
import group from './asset/Group.svg'
import vector from './asset/Vector.svg'
import user2 from './asset/user 2-1.svg'
import channel from './asset/Group 35468-1.svg'
import holiday from './asset/Group 35468.svg'
import deadline from './asset/Group 35470.svg'
import quick from './asset/Group 35471.svg'
import todo from './asset/Group 35472.svg'
// end of image import

const index = () => {
  return (
    <div>
      <Header />
      <div className={`container`}>
        <div className={`${styles.banner}`}>
          <h1>
            Make more life simpler, more pleasant and <br />
            more productive.
          </h1>
          <p>
            Zurichat is the collaboration hub that brings the right people,
            information, and tools together to get work done. From Fortune 100
            companies to corner markets, millions of people around the world use
            Zurichat to connect their teams, unify their systems, and drive
            their business forward.
          </p>
        </div>
        <div className={`row`}>
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
              use Zurichat
            </p>
          </div>
          <div className={`col-lg-4 ${styles.counter}`}>
            <h3>50+</h3>
            <p>
              countries have daily <br />
              active users in Zurichat
            </p>
          </div>
        </div>
      </div>
      {/* COMPANIES */}
      <div className={`${style.company_banner_wrap}`}>
        <div className={`${style.company_banner}`}>
          <p className={`${style.cbp}`}>Trusted by top companies worldwide</p>
          <div className={`${style.logos}`}>
            <img src={logo_hng} alt="" className={`${style.logo}`} />
            <img src={logo_i4g} alt="" className={`${style.logo}`} />
            <img src={logo_camphouse} alt="" className={`${style.logo}`} />
            <img src={logo_zuri} alt="" className={`${style.logo}`} />
          </div>
        </div>
      </div>
      {/* Who we are and how to join us */}
      <div className={`container ${styles.to_join}`}>
        <div className={`row`}>
          <div className={`col-lg-6 ${styles.team}`}>
            <img src={team} alt={'image of teams'} srcset="" />
          </div>
          <div className={`col-lg-6 ${styles.join_us}`}>
            <h3>Who we are and how to join us</h3>
            <p>
              We live by our mission, and improving people’s working life starts
              with our own company. We’re building a platform and products we
              believe in — <br />
              as well as a strong, diverse team of curious, creative people who
              want to do the best work of their lives and support each other in
              the process.
            </p>
            <p>
              <span>Careers</span> at Zurichat offer all kinds of opportunities
              and a simpler, more pleasant, more productive working life.
            </p>
          </div>
        </div>
      </div>
      {/* work remotely more intriging than ever  */}
      <div className={`container`}>
        <div className={`col-lg-12 ${styles.working_remote}`}>
          <h3>Working remotely more intriging than ever</h3>
          <p>
            Zuri Chat is where work meets fun. Activate body and mind, maintain
            high productivity levels, <br />
            connect and interact with your team comfortably and efficiently.
          </p>
        </div>
        <div className={`row`}>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={channel} alt={'centralized space'} />
            <h6>Channel</h6>
            <p>
              Increase level of organization in your team focused with <br />
              centralized spaces
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={holiday} alt={'image of calender'} />
            <h6>Holiday Calender</h6>
            <p>
              Add holidays, set reminders <br />
              and see all in one view
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={deadline} alt={'image of alarm clock'} />
            <h6>Company Deadline</h6>
            <p>
              Meet up with deadlines with <br />
              the company deadline <br />
              feature.
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={quick} alt={'image of quick reply app'} />
            <h6>Quick Reply App</h6>
            <p>
              Get swift replies to Direct <br />
              Messages and across all <br />
              your channels.
            </p>
          </div>
          <div className={`col ${styles.working_remote_section}`}>
            <img src={todo} alt={'image to do list'} />
            <h6>To do List</h6>
            <p>
              Organize tasks with the to-do <br />
              list feature ensuring urgent <br />
              tasks are duly attended to.
            </p>
          </div>
        </div>
      </div>

      {/* special features you need  */}
      <div className={`${styles.working_remote}`}>
        <h3>Special Feature You Need</h3>
        <p>
          Get all your work tools and information assembled in one place for
          easy access and increase Productivity{' '}
        </p>
      </div>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col ${styles.vector}`}>
            <img src={user} alt={'image of a user'} />
            <h6 className={``}>Animated Avatar Loungue</h6>
            <p>Create and animate your own avatar in the avatar lounge</p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={group} alt={'image of a company file'} />
            <h6 className={``}>Company Files</h6>
            <p>
              Access your files on google drive while <br /> on Zuri Chat.
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={vector} alt={'accessibility image'} />
            <h6 className={``}>Accessibility</h6>
            <p>
              Be in control, Use zuri Chat as you will <br /> and have a
              pleasant experience.
            </p>
          </div>
          <div className={`col ${styles.vector}`}>
            <img src={user2} alt={'image of target board'} />
            <h6 className={``}>Company Goals</h6>
            <p>
              Keep up with company goals to stay on <br /> track with your team.
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
            <button className={`btn ${styles.btn_sale}`}>Talk to sales</button>
            <button className={`btn ${styles.btn_free}`}>
              Try it for free
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
