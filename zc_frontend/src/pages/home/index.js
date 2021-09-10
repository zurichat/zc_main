import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../context/Url'
import { ProfileProvider } from '../../context/ProfileModal'
import { TopbarProvider } from '../../context/Topbar'
import { PluginLoaderProvider } from '../../context/PluginLoaderState'
import Profile from '../../components/Profile'

const Home = () => {
  return (
    <UrlProvider>
      <div className={styles.container}>
        <Sidebar />
        <ProfileProvider>
          <TopbarProvider>
            <div className={styles.room}>
              <Topbar />
              <div className={styles.spaceWrapper}>
                <div className={styles.pluginContent}>
                  <PluginLoaderProvider>
                    <PluginContent />
                  </PluginLoaderProvider>
                </div>
                <Profile />
              </div>
            </div>
          </TopbarProvider>
        </ProfileProvider>
      </div>
    </UrlProvider>
  )
}

export default Home
