import { trimUrl, filterUrl } from './filterurl'
import axios from 'axios'
import { ACTION } from '../root.component'

export const fetchsidebar = (userInfo, dispatch) => {
  if (userInfo !== null) {
    //Check for organization
    if (userInfo.organizationInfo !== null) {
      //Query organization info to get pluginData

      for (let index = 0; index < userInfo.organizationInfo.length; index++) {
        const { plugin } = userInfo.organizationInfo[index]

        const sidebarUrl = plugin.sidebar_url
        const trimmedUrl = trimUrl(sidebarUrl)
        const pluginKey = filterUrl(plugin.sidebar_url)

        axios
          .get(
            `${
              trimmedUrl.includes('https://') || trimmedUrl.includes('http://')
                ? trimmedUrl
                : `https://${trimmedUrl}`
            }?org=${userInfo.currentWorkspace}&user=${userInfo.userId}`
          )
          .then(res => {
            try {
              const validPlugin = res.data
              if (validPlugin.name !== undefined) {
                if (typeof validPlugin === 'object') {
                  if (userInfo.organizationInfo.length - 1 !== index) {
                    console.log('valid plug', validPlugin)
                    dispatch({
                      type: ACTION.ADD_SIDEBAR_DATA,
                      payload: validPlugin
                    })
                  }
                }
              }
            } catch (err) {
              return null
            }
          })
          .catch(console.log)
          .finally(() => {
            console.log('done')
          })
      }
    }
  }
}
