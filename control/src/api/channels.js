import axios from 'axios'
import { GetUserInfo } from '../zuri-control'

const channelApi = `https://channels.zuri.chat/api/v1`

export const createDefaultChannel = (org_id, title = 'General') => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  if (!user) return 'NO USER LOGGED IN'

  GetUserInfo().then(res => {
    const memberId = res._id
    const { token } = user
    const config = { headers: { Authorization: `Bearer ${token}` } }

    axios
      .post(
        `${channelApi}/${org_id}/channels/`,
        {
          name: `${title}`,
          owner: `${memberId}`,
          description: `Default channel`,
          private: false,
          topic: 'General',
          default: 'true'
        },
        config
      )
      .then(res => {
        const channelID = res.data.InsertedID
        sessionStorage.setItem('defaultChannel', channelID)
        return channelID
      })
  })
}

export const findDefaultChannel = async org_id => {
  // TODO
  // change back to default
  // const res = await axios.get(`${channelApi}/${org_id}/channels/?default=true`)
  const res = await axios.get(`${channelApi}/${org_id}/channels/`)
  const channelID = res.data[0]._id
  sessionStorage.setItem('defaultChannel', channelID)
  return channelID
}

export const goToChannel = channelID => {
  window.location.href = `/channels/message-board/${channelID}`
}

export const goToDefaultChannel = () => {
  const channelID = sessionStorage.getItem('defaultChannel')
  if (!channelID) {
    findDefaultChannel().then(res => {
      goToChannel(res)
    })
  }
  goToChannel(channelID)
}
