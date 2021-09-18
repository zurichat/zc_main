import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
// import Topbar from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../context/Url'
import { PluginProvider } from '../../context/Plugins'
import { ProfileProvider } from '../../context/ProfileModal'
import { TopbarProvider } from '../../context/Topbar'
import { PluginLoaderProvider } from '../../context/PluginLoaderState'
import Profile from '../../components/Profile'
import TopNavBar from '../../components/verified-components/TopNavBar'
// import Topbar from '../../components/Topbar'

const Home = () => {
  return (
    <UrlProvider>
      <PluginProvider>
        <PluginLoaderProvider>
          <ProfileProvider>
            <TopbarProvider>
              <TopNavBar />
              {/* <Topbar /> */}
              <div className={styles.room}>
                <div className={styles.container}>
                  <Sidebar />
                  <div className={styles.spaceWrapper}>
                    <div className={styles.pluginContent}>
                      <PluginContent />
                    </div>
                  </div>
                  <Profile />
                </div>
              </div>
            </TopbarProvider>
          </ProfileProvider>
        </PluginLoaderProvider>
      </PluginProvider>
    </UrlProvider>
  )
}

export default Home
