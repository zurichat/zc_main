import { useContext, useEffect } from 'react'
import { URLContext } from '../context/Url'
import { PluginContext } from '../context/Plugins'

import PluginLoader from './PluginLoader'
import Welcome from './Welcome'
import { PluginNavBar } from './verified-components'
import faker from 'faker'

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

  const placeHolder = n => {
    const placeHolderMembersArray = []
    for (let i = 0; i < n; i++) {
      placeHolderMembersArray.push({
        userName: faker.internet.userName().toLowerCase(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        status: faker.lorem.sentence(),
        avatar: faker.internet.avatar()
      })
    }
    return placeHolderMembersArray
  }
  const faked = placeHolder(44134)

  return (
    <>
      <section style={{ position: 'relative' }}>
        <PluginNavBar members={faked} />
        <div id="zc-plugin-root"></div>
        <PluginLoader />
      </section>
      {!url && <Welcome />}
    </>
  )
}
