import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../contexts/Url'
import { ProfileProvider } from '../../contexts/ProfileModal'
import { TopbarProvider } from '../../contexts/Topbar'
import Profile from '../../components/Profile'

const Home = () => {
  return (
    <UrlProvider>
      <div className={styles.container}>
        <Sidebar />
        <ProfileProvider>
          <div className={styles.room}>
            <TopbarProvider>
              <Topbar />
            </TopbarProvider>
            <div className={styles.spaceWrapper}>
              <div className={styles.pluginContent}>
                <PluginContent />
              </div>
              <Profile />
            </div>
          </div>
        </ProfileProvider>
      </div>
    </UrlProvider>
  )
}

export default Home
