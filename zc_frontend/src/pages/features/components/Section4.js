import styles from '../styles/Section4.module.css'
import appImage from '../../../assets/app.png'
import funImage from '../../../assets/Fun.png'
const Section4 = () => {
  return (
    <div className={styles.section4}>
      <img src={appImage} alt="app" className={styles.appImage} />
      <div className={styles.funSection}>
        <img src={funImage} alt="fun" className={styles.funImage} />
        <div className={styles.funText}>
          <h2>Fun at is Peak</h2>
          <p>
            With zuri Chat, it’s not just all about work. while, you work, you
            can have fun with your team mates with our games plugins as well as
            listen to fun music. Share fun times and things with co-workers and
            build the team spirit
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section4
