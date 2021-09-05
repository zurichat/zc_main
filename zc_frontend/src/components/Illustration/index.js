import styles from './illustration.module.css'

const Illustration = () => {
  return (
    <div className={styles.login__banner}>
      <div className={styles.login__header}>
        <figure className={styles.illustration__path}>
          <div className={styles.illustration__left_arrow}></div>
          <div className={styles.illustration__msg}></div>
          <div className={styles.illustration__right_arrow}></div>
          <div className={styles.illustration__center_arrow}></div>
        </figure>

        <div className={styles.login__header__text}>
          <h1>
            Have fun while working <br /> as a team
          </h1>
          <p>Unlimited team collaboration platform</p>
        </div>
      </div>

      <figure className={styles.illustration__login}>
        <div className={styles.illustration__flower}></div>
        <div className={styles.illustration__bg_path}></div>
        <div className={styles.illustration__woman}></div>
        <div className={styles.illustration__man}></div>
      </figure>
    </div>
  )
}

export default Illustration
