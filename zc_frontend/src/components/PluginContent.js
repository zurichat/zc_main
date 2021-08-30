import axios from 'axios'
import { useContext, useEffect } from 'react'
import { URLContext } from '../contexts/Url'

import styles from '../styles/PluginContent.module.css'

export const PluginContent = () => {
  // const pluginUrl = '/apps/default';
  const value = useContext(URLContext)

  useEffect(() => {
    axios.get(value.url).then((response) => {
      const parser = new DOMParser()
      const html = parser.parseFromString(response.data, 'text/html')

      Array.from(html.querySelectorAll('link[rel="stylesheet"]')).forEach(
        (element) => {
          const link = document.createElement('link')
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('href', element.href)
          document.head.prepend(link)
        }
      )

      Array.from(html.scripts).forEach((script) => {
        const newScript = document.createElement('script')
        if (script.src) {
          newScript.src = script.src
        } else {
          newScript.innerHTML = script.innerHTML
        }
        script.remove()
        document.body.appendChild(newScript)
      })
    })
  }, [value.url])

  return (
    <section className={styles.container}>
      <div id="zc-plugin-root" className={styles.content}>
        Loading...
      </div>
    </section>
  )
}
