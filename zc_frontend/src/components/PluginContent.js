import { useContext, useEffect } from 'react'
import { URLContext } from '../context/Url'
import { PluginContext } from '../context/Plugins'

import PluginLoader from './PluginLoader'
import styles from '../styles/PluginContent.module.css'
import Welcome from './Welcome'
import { PluginNavBar } from '../pages/test'

export const PluginContent = () => {
  const { url } = useContext(URLContext)
  const { plugins } = useContext(PluginContext)

  useEffect(() => {
    if (!url) return
    const elRoot = document.getElementById('zc-plugin-root')
    let currentPlugin = plugins.find(plugin => plugin.homepage_url === url)
    console.log(plugins)
    if (currentPlugin) {
      elRoot.innerHTML = currentPlugin.homepage
      console.log(currentPlugin)
    }
  }, [url, plugins])

  return (
    <>
      <section className={styles.container}>
        <PluginNavBar />
        <div id="zc-plugin-root"></div>
        <PluginLoader />
      </section>
      {!url && <Welcome />}
    </>
  )
}
