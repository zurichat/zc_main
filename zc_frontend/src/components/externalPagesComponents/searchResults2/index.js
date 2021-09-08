import styles from './searchResults2.module.css'
import Header from '../Header'
import Message from '../../externalPagesComponents/Footer/Message.js'
import Footer from '../../externalPagesComponents/Footer/Footer.js'
import Line from './Line.svg'
import BlogImage from './blogImage.png'

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Frequently asked questions"
        />

        <ul className={styles.linkGroup}>
          <li>ALL</li>
          <li>RESOURCES</li>
          <li>BLOG</li>
          <li>HELP CENTRE</li>
          <li>PLATFORM</li>
          <li>PRIVACY POLICY</li>
          <li>MORE</li>
        </ul>

        <div className={styles.articleI}>
          <h4>Blog</h4>
          <div className={styles.subArticleI}>
            <div
              style={{ backgroundImage: `url(${BlogImage})` }}
              className={styles.blogImage}
            />
            <div>
              <p>COLLABORATION</p>
              <h1>
                Cultivate High-Performance Teams Frequently Asking Questions
              </h1>
              <p>
                Employees want regular feedback that's personal, specific, and
                in tune with company goals.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.articleII}>
          <h4>FAQs</h4>
          <h1>Understand Guest Roles in Zuri Chat</h1>
          <p>
            Employees want regular feedback that's personal, specific, and in
            tune with company goals and can be added to an unlimited number of
            channels. Single- Channel Guests only access one channel. For every
            ...
          </p>
          <div>
            <p>Learn More</p>
            <img src={Line} alt="arrow_left" />
          </div>
        </div>

        <div className={styles.articleIII}>
          <h1>Accessing Frequently Asked</h1>
          <p>
            Employees want regular feedback that's personal, specific, and in
            tune with company goals and can be added to an unlimited number of
            channels. Single- Channel Guests only access one channel. For every
            ...
          </p>
          <div>
            <p>Learn More</p>
            <img src={Line} alt="arrow_left" />
          </div>
        </div>

        <hr />

        <div className={styles.articleIV}>
          <h4>Help Center</h4>
          <h1>Acceptable Use Policy</h1>
          <p>
            Employees want regular feedback that's personal, specific, and in
            tune with company goals and can be added to an unlimited number of
            channels. Single- Channel Guests only access one channel. For every
            ...
          </p>
          <div>
            <p>Learn More</p>
            <img src={Line} alt="arrow_left" />
          </div>
        </div>

        <div className={styles.articleV}>
          <h1>Multi-Year Accessibility Plan</h1>
          <p>
            Employees want regular feedback that's personal, specific, and in
            tune with company goals and can be added to an unlimited number of
            channels. Single- Channel Guests only access one channel. For every
            ...
          </p>
          <div>
            <p>Learn More</p>
            <img src={Line} alt="arrow_left" />
          </div>
        </div>
      </main>

      <Message />

      <Footer />
    </div>
  )
}
