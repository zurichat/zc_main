import { authAxios } from '../utils/Api'
import { GetUserInfo } from '@zuri/control'
import { plugindata } from './plugindata'

export const fetchUser = async dispatch => {
  const user = await GetUserInfo()

  //Get token from sessionStorage
  let token = sessionStorage.getItem('token')

  //Get wrokspace info
  let currentWorkspace = localStorage.getItem('currentWorkspace')

  //Check if user id is valid and get user organization
  if (user[0]._id !== '') {
    const org_url = `/organizations/${currentWorkspace}/plugins`
    authAxios
      .get(org_url)
      .then(res => {
        //Call plugin function and store sidebar data in state
        plugindata(dispatch, res.data.data, currentWorkspace, user[0]._id)
      })
      .catch(err => console.log(err))
  } else {
    console.log('Checking')
  }
}
