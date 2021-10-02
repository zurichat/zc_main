import { useEffect, useState } from 'react'
// import { authAxios } from './Api'
import { fetchUser } from './src/utils/fetchUserDetails'
import { trimUrl, filterUrl } from './src/utils/filterurl'
import axios from 'axios'

export const plugindata =  () => {

    const user = fetchUser()

    const [userInfo,setUser] = useState(null)

    const [plugininfo, setPlugin] = useState({})

    const [render, setRender] = useState(0)

    

  //Wait for user info to resolve
  useEffect(() => {
    user.then(res => {
      if (res !== null ) {
          setUser(res.userInfo)
          console.log('check check',userInfo);
        //   setRender(render + 1)
        setRender(1)
      }
    })
  }, [user])

  
  

  
  useEffect(() => {
      let sideBarData = {}
    if(userInfo !== null){

    //Check for organization
    if(userInfo.organizationInfo !== null){

        //Query organization info to get pluginData
        for(let index = 0; index < userInfo.organizationInfo.length; index++){
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
                      

                    //   console.log("done setting sidebar data", validPlugin);
                    //   console.log(sideBarData, "sidebar data");

                    if(userInfo.organizationInfo.length -1 !== index){
                        console.log('Sidebar data',sideBarData);
                        console.log('plugin state before', plugininfo);
                    return sideBarData = { ...sideBarData, [pluginKey]: validPlugin }
                    }

                  }
                  
                   
                }
              } catch (err) {return null}
            })
            .catch(console.log)
            .finally(() => {
            //If loop is done running, set plugin state to sidebar data
            if(userInfo.organizationInfo.length -1 === index){
                
                setPlugin(prev => {
                        return {...prev,sideBarData}
                    })
                    console.log('plugin state', plugininfo);
                    
            }
            })
        
    }
    } 
  }
  }, [render])

    return { plugininfo }
  
}
