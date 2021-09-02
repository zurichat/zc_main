import axios from 'axios'
import { useContext, useEffect } from 'react'
import { URLContext } from '../contexts/Url'
import cheerio from 'cheerio'

import styles from '../styles/PluginContent.module.css'
import Welcome from './Welcome'

export const PluginContent = () => {
  // const pluginUrl = '/apps/default';
  const { url } = useContext(URLContext)

  useEffect(() => {
    if (!url) return

    const elRoot = document.getElementById('zc-plugin-root')
    const reProtocol = /^https?:\/\//
    const oURL = new URL(reProtocol.test(url) ? url : 'http://' + url)
    const prefixLink = (url, oURL, mimeType = 'text/html') => {
      let ret = reProtocol.test(url) ? url : `${oURL.origin}${url}`
      return `/proxy?url=${ret}&mimeType=${mimeType}`
    }

    axios
      .get(prefixLink(oURL.toString()))
      .then(res => {
        const $ = cheerio.load(res.data)

        // append stylesheet
        $(`link[rel="stylesheet"]`).each(function () {
          const link = document.createElement('link')
          Object.keys(this.attribs).forEach(attr =>
            link.setAttribute(attr, this.attribs[attr])
          )
          link.setAttribute(
            'href',
            prefixLink(this.attribs.href, oURL, 'text/css')
          )
          link.setAttribute('data-plugin-res', true)
          $(this).remove()
          document.head.prepend(link)
        })

        // append scripts
        $('script').each(function () {
          const script = document.createElement('script')
          Object.keys(this.attribs).forEach(attr =>
            script.setAttribute(attr, this.attribs[attr])
          )
          if (script.src) {
            script.setAttribute(
              'src',
              prefixLink(this.attribs.src, oURL, 'application/javascript')
            )
          } else {
            script.innerText = $(this).html()
          }
          $(this).remove()
          script.setAttribute('data-plugin-res', true)
          document.body.appendChild(script)
        })
        elRoot.innerHTML = $('body').html()
      })
      .catch(e => {
        elRoot.innerHTML = `Failed to Load ${url} Plugin: ${e.message}`
      })
    return () => {
      elRoot.innerHTML = ''
      document
        .querySelectorAll('[data-plugin-res]')
        .forEach(node => node.remove())
    }
  }, [url])

  return (
    <>
      <section className={styles.container}>
        <div id="zc-plugin-root">Loading...</div>
      </section>
      {!url && <Welcome />}
    </>
  )
}
