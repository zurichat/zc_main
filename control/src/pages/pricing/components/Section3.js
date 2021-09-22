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

<<<<<<< HEAD:control/src/pages/pricing/components/Section3.js
        <Link className={styles.textLink} to="./security">
=======
        <Link className={styles.textLink} href="./security">
>>>>>>> 685502ac6df2845dd53fb0dbf969d47faf4f64f5:zc_frontend/src/pages/pricing/components/Section3.js
          Learn more about security
        </Link>
      </div>
    </section>
  )
}

export default Section3
