import axios from 'axios'
import { useContext, useEffect } from 'react'
import { URLContext } from '../contexts/Url'
import cheerio from 'cheerio'

import styles from '../styles/PluginContent.module.css'

const proxyUrl = (url, baseUrl = '', mimeType = 'text/html') => {
  return `/proxy?url=${encodeURI(url)}&mimeType=${encodeURI(mimeType)}`
}

export const PluginContent = () => {
  // const pluginUrl = '/apps/default';
  const { url } = useContext(URLContext)

  useEffect(() => {
    if (!url) return

    const elRoot = document.getElementById('zc-plugin-root')
    const reProtocol = /^https?:\/\//
    const oURL = new URL(reProtocol.test(url) ? url : 'http://' + url)
    const prefixLink = (url, oURL) =>
      reProtocol.test(url) ? url : `${oURL.origin}${url}`

    axios.get(oURL).then((res) => {
      const $ = cheerio.load(res.data)

      $(`link[rel="stylesheet"]`).each(function () {
        const link = document.createElement('link')
        Object.keys(this.attribs).forEach((attr) =>
          link.setAttribute(attr, this.attribs[attr])
        )
        link.setAttribute('href', prefixLink(this.attribs.href, oURL))
        link.setAttribute('data-plugin-res', true)
        $(this).remove()
        document.head.prepend(link)
      })

      $('script').each(function () {
        const script = document.createElement('script')
        Object.keys(this.attribs).forEach((attr) =>
          script.setAttribute(attr, this.attribs[attr])
        )
        if (script.src) {
          script.setAttribute('src', prefixLink(this.attribs.src, oURL))
        } else {
          script.innerText = $(this).html()
        }
        $(this).remove()
        script.setAttribute('data-plugin-res', true)
        document.body.appendChild(script)
      })
      elRoot.innerHTML = $('body').html()
    })
    return () => {
      elRoot.innerHTML = ''
      document
        .querySelectorAll('[data-plugin-res]')
        .forEach((node) => node.remove())
    }
  }, [url])

  return (
    <section className={styles.container}>
      <div id="zc-plugin-root" className={styles.content}>
        Loading...
      </div>
    </section>
  )
}
