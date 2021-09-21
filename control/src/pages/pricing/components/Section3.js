import { Link } from 'react-router-dom'
import styles from '../styles/Section3.module.css'

function Section3() {
  return (
    <section
      id="security-assurance"
      className={`${styles.section3} ${styles.py3}`}
    >
      <div className={styles.container}>
        <header>
          <h2 className={`${styles.textHead}`}>
            Leading the way in enterprise security
          </h2>
        </header>

        <p>
          In addition to encryption in transit and at rest, we operate
          comprehensive compliance ans assurance programs.
        </p>

<<<<<<< HEAD:zc_frontend/src/pages/pricing/components/Section3.js
        <Link className={styles.textLink} href="./security">
=======
        <Link className={styles.textLink} to="./security">
>>>>>>> 1c7772a0b9f3fd3e3bb8e6a80ef356618c2e8829:control/src/pages/pricing/components/Section3.js
          Learn more about security
        </Link>
      </div>
    </section>
  )
}

export default Section3
