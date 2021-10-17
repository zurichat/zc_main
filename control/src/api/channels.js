import axios from 'axios'
import { GetUserInfo } from '../zuri-control'

const channelApi = `https://channels.zuri.chat/api/v1`

export const createDefaultChannel = (org_id, title = 'General') => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  if (!user) return 'NO USER LOGGED IN'

  GetUserInfo().then(res => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const memberId = userData._id
    const { token } = user
    const config = { headers: { "Content-type": "application/json" , Authorization: `Bearer ${token}` } }
    

    axios
      .post(
        `https://channels.zuri.chat/api/v1/install`,
        {
          title: `${title}`,
          organization_id: `${org_id}`,
          user_id: `${memberId}`
        },
        config
      )
      .then(res => {
        const redirectLink = res.data.data.redirect_url
        sessionStorage.setItem('redirectLink', redirectLink)
        return redirectLink
      })

      axios
      .post(`https://dm.zuri.chat/api/v1/install`, 
      {
        organisation_id: `${org_id}`,
        user_id: `${memberId}`
      },
      config)
  })
}

export const findDefaultChannel = async (org_id) => {
  // TODO
  // change back to default
  // const res = await axios.get(`${channelApi}/${org_id}/channels/?default=true`)
  if(!org_id){
    org_id =  localStorage.getItem('currentWorkspace')
  }
  const res = await axios.get(`${channelApi}/${org_id}/channels/`)
  const channelID = res.data[0]._id
  sessionStorage.setItem('defaultChannel', channelID)
  return channelID
}

export const goToChannel = channelID => {
  window.location.href = `${channelID}`
}

export const goToDefaultChannel = () => {
  const channelID = sessionStorage.getItem('redirectLink')
  if (!channelID) {
    findDefaultChannel().then(res => {
      goToChannel(res)
    })
  }
  let redirect_link = sessionStorage.getItem('redirectLink')
  goToChannel(redirect_link)
}

export const switchWorkSpace = (currentOrgId, title = "General") =>{
  const user = JSON.parse(sessionStorage.getItem('user'))

  if (!user) return 'NO USER LOGGED IN'

  GetUserInfo().then(res => {
    const memberId = res[0]._id
    const { token } = user
    const config = { headers: { "Content-type": "application/json" , Authorization: `Bearer ${token}` } }

    axios
      .get(
        `${channelApi}/${currentOrgId}/channels/?default=true`,
      )
      .then(res => {
        const redirectLink = `channels/message-board/${res.data[0]._id}`
        goToChannel(redirectLink)
      }).catch(err => alert(err.message))
})
}