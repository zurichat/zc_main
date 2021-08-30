import { PluginContent } from '../../components/PluginContent'
import { Sidebar } from '../../components/Sidebar'
import { Topbar } from '../../components/Topbar'
import styles from '../../styles/Home.module.css'
import { UrlProvider } from '../../contexts/Url'
import ProfileModal from '../../components/ProfileModal'
import { useState } from 'react'

const Home = () => {

  const [isShow, setShow] = useState(true);

  return (
    <UrlProvider>
      <ProfileModal isShow={isShow} setShow={setShow} title="Edit your profile">
        Testing
      </ProfileModal>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.room}>
          <Topbar />
          <div className={styles.pluginContent}>
            <PluginContent />
          </div>
        </div>
      </div>
    </UrlProvider>
  )
}

export default Home
