import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
import { Topbar } from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../contexts/Url'
import { ProfileProvider } from '../../contexts/ProfileModal'
import TopbarModal from './../../components/TopbarModal'
import { TopbarProvider } from '../../contexts/Topbar'

const Home = () => {
  return (
    <UrlProvider>
      <div className={styles.container}>
        <Sidebar />
        <ProfileProvider>
          <div className={styles.room}>
            <TopbarProvider>
              <Topbar />
              <TopbarModal />
            </TopbarProvider>
            <div className={styles.pluginContent}>
              <PluginContent />
            </div>
          </div>
        </ProfileProvider>
      </div>
    </UrlProvider>
  )
}

export default Home
