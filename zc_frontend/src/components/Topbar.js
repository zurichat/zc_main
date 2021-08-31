import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
          <SearchBar />
        <img src="/settings.svg" alt="settings" />
        <div className={styles.profile}>
          <img src="/profilepic.png" alt="Profile" />
        </div>
      </div>
    </div>
  )
}
