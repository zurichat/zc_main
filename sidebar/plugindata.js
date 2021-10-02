import { useEffect, useState, useRef, useMemo } from 'react'
// import { authAxios } from './Api'
import { fetchUser } from './src/utils/fetchUserDetails'
import { trimUrl, filterUrl } from './src/utils/filterurl'
import axios from 'axios'
import { ACTION } from './src/root.component'

export const plugindata = (state, dispatch, render) => {
  const user = fetchUser()

  const [userInfo, setUser] = useState(null)

  const [plugininfo, setPlugin] = useState({})

  // const [render,setrender] = useState(0)

  //Wait for user info to resolve
  useEffect(() => {
    user.then(res => {
      if (res !== null) {
        setUser(res.userInfo)
        console.log('check check', userInfo)
      }
    })
  }, [user])

  let sideBarData = {}

  const fetchSidebar = () => {
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
                trimmedUrl.includes('https://') ||
                trimmedUrl.includes('http://')
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
              //If loop is done running, set plugin state to sidebar data
              // console.log("finnalyyyyyyy", sideBarData);
              // console.log("Done setting dispatch");
              // if (userInfo.organizationInfo.length - 1 === index) {
              // setPlugin(prev => {
              //         return {...prev,sideBarData}
              //     })
              //   setrender(2)
              // }
              //   ref.current = sideBarData
              //   console.log('plugin state', ref)
              // }
            })
        }
        return null
      }
    }
  }

  useEffect(() => {
    // fetchSidebar()
    console.log('render')
  }, [render])

  return { plugininfo }
}
