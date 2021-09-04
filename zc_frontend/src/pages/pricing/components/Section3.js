import styles from '../styles/Section3.module.css'

function Section3() {
  return (
    <section
      id="security-assurance"
      className={`${styles.section3} ${styles.py3}`}
    >
      <div className={styles.container}>
        <header>
          <h2>Leading the way in enterprise security</h2>
        </header>

        <p>
          In addition to encryption in transit and at rest, we operate
          comprehensive compliance ans assurance programs.
        </p>

        <a className={styles.textLink} href="./">
          Learn more about security
        </a>
      </div>
    </section>
  )
}

export default Section3
