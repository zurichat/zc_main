import { useContext } from 'react'
import { TopbarContext } from './context/Topbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './styles/Topbar.module.css'
import SearchBar from './components/SearchBar'
import StatusBadge from './components/StatusBadge'
import TopbarModal from './components/TopbarModal'
import ProfileModal from './components/ProfileModal'
// import { MembersModalButton } from './MembersModal'

const members = []

const Topbar = ({ userProfile: { last_name, first_name } }) => {
  const state = useContext(TopbarContext)
  const { openModal, presence } = state
  const [active] = presence

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.topbar}>
        {/* <MembersModalButton members={faked} /> */}
        <Link to="/settings">
          <img src="/settings.svg" alt="settings" className={styles.settings} />
        </Link>
        <StatusBadge />
        <div className={styles.profile} onClick={openModal}>
          <img src="/profilepic.png" alt="Profile" />
          {active ? (
            <div className={styles.circles}></div>
          ) : (
            <div className={styles.circleAway}></div>
          )}
        </div>
        <p>
          {last_name} {first_name}
        </p>
      </div>

      <ProfileModal />
      <TopbarModal members={members} />
    </div>
  )
}

const mapStateToProps = state => ({
  userProfile: state
})

export default connect(mapStateToProps)(Topbar)
