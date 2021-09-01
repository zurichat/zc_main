import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
import { Topbar } from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../contexts/Url'
import TopbarModal from './../../components/TopbarModal'

const Home = () => {
  return (
    <UrlProvider>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.room}>
          <Topbar />
          <TopbarModal />
          <div className={styles.pluginContent}>
            <PluginContent />
          </div>
        </div>
      </div>
    </UrlProvider>
  )
}

export default Home
