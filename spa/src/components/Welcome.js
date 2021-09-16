import styles from '../styles/Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <img src="/zurichatlogo.svg" alt="Zuri Chat Logo" />
      <strong>Welcome to the Workspace</strong>
    </div>
  )
}

export default Welcome
