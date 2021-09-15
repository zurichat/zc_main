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
import { TopNavBar } from '../test/index'

const Home = () => {
  return (
    <UrlProvider>
      <PluginProvider>
        <PluginLoaderProvider>
          <TopNavBar />
          <div className={styles.container}>
            <Sidebar />
            <ProfileProvider>
              <TopbarProvider>
                <div className={styles.room}>
                  {/* <Topbar /> */}
                  <div className={styles.spaceWrapper}>
                    <div className={styles.pluginContent}>
                      <PluginContent />
                    </div>
                    <Profile />
                  </div>
                </div>
              </TopbarProvider>
            </ProfileProvider>
          </div>
        </PluginLoaderProvider>
      </PluginProvider>
    </UrlProvider>
  )
}

export default Home
