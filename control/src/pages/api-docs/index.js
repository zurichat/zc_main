// import axios from 'axios'
// import { useContext, useEffect } from 'react'
// import { PluginLoaderContext } from '../../context/PluginLoaderState'
// import cheerio from 'cheerio'
// import DocLoader from '../../components/PluginLoader'
import { NavLink } from 'react-router-dom'

function ApiDocs() {
  // const url = `https://api.zuri.chat/docs/user.html`

  // const { setLoader } = useContext(PluginLoaderContext)

  // useEffect(() => {
  //   if (!url) return

  //   const elRoot = document.getElementById('zc-plugin-root')
  //   const reProtocol = /^https?:\/\//
  //   const oURL = new URL(reProtocol.test(url) ? url : 'http://' + url)
  //   const prefixLink = (url, oURL, mimeType = 'text/html') => {
  //     let ret = reProtocol.test(url) ? url : `${oURL.origin}${url}`
  //     return `/proxy?url=${ret}&mimeType=${mimeType}`
  //   }

  //   setLoader('loading');

  //   axios
  //     .get(prefixLink(oURL.toString()))
  //     .then(res => {
  //       const $ = cheerio.load(res.data)

  //       // append stylesheet
  //       $(`link[rel="stylesheet"]`).each(function () {
  //         const link = document.createElement('link')
  //         Object.keys(this.attribs).forEach(attr =>
  //           link.setAttribute(attr, this.attribs[attr])
  //         )
  //         link.setAttribute(
  //           'href',
  //           prefixLink(this.attribs.href, oURL, 'text/css')
  //         )
  //         link.setAttribute('data-plugin-res', true)
  //         $(this).remove()
  //         document.head.prepend(link)
  //       })

  //       // append styles
  //       $('style').each(function () {
  //         const style = document.createElement('style')
  //         Object.keys(this.attribs).forEach(attr =>
  //           style.setAttribute(attr, this.attribs[attr])
  //         )
  //         style.innerText = $(this).html();
  //         $(this).remove()
  //         style.setAttribute('data-plugin-res', true)
  //         document.body.appendChild(style)
  //       })

  //       let counter = 0;

  //       $('script').each(function () {
  //         const script = document.createElement('script')

  //         if (counter === 0) {
  //           script.innerText = $(this).html();

  //           $(this).remove()
  //           document.head.appendChild(script);
  //         } else {
  //           // console.log(script[0].innerText)

  //           script.innerText = $(this).html();

  //           $(this).remove()
  //           document.body.appendChild(script);
  //         }
  //         counter++;
  //       })
  //       elRoot.innerHTML = $('body').html()
  //       setLoader('ready')
  //     })
  //     .catch(e => {
  //       elRoot.innerHTML = `Failed to Load ${url} Plugin: ${e.message}`
  //       setLoader('ready')
  //     })
  //   return () => {
  //     elRoot.innerHTML = ''
  //     document
  //       .querySelectorAll('[data-plugin-res]')
  //       .forEach(node => node.remove())
  //   }
  // }, [url, setLoader])

  return (
    <>
      <section>
        {/* <div id="zc-plugin-root"></div> */}
        {/* <DocLoader /> */}
        <div>
          <NavLink to="/documentation/users">Users</NavLink>
        </div>
        <div>
          <NavLink to="/documentation/organisation">Organisation</NavLink>
        </div>
        <div>
          <NavLink to="/documentation/data">Data</NavLink>
        </div>
        <div>
          <NavLink to="/documentation/marketplace">Marketplace</NavLink>
        </div>
        <div>
          <NavLink to="/documentation/plugin">Plugin</NavLink>
        </div>
        <div>
          <NavLink to="/documentation/auth">Auth</NavLink>
        </div>
      </section>
    </>
  )
}

export default ApiDocs
