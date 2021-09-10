import { useContext } from 'react'
import { TopbarContext } from '../context/Topbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from '../styles/Topbar.module.css'
import SearchBar from './externalPagesComponents/SearchBar'
import StatusBadge from './StatusBadge'
import TopbarModal from './TopbarModal'
import ProfileModal from './ProfileModal'

const Topbar = ({ userProfile: { last_name, first_name } }) => {
  const state = useContext(TopbarContext)
  const { openModal } = state

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.topbar}>
        <Link to="/settings">
          <img src="/settings.svg" alt="settings" className={styles.settings} />
        </Link>
        <StatusBadge />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profilepic.png" alt="Profile" />
          <div className={styles.circles}></div>
        </div>
        <p>
          {last_name} {first_name}
        </p>
      </div>

      <ProfileModal />
      <TopbarModal />
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state
})

export default connect(mapStateToProps)(Topbar)
