import { useEffect, useState } from 'react'
import { authAxios } from './Api'
import { GetUserInfo } from '@zuri/control'

export const fetchUser = async () => {
  //Store user info in state
  const [userInfo, setUserInfo] = useState({
    userId: '',
    token: '',
    currentWorkspace: ''
  })

  //store organization info
  const [organizationInfo, setOrganizationInfo] = useState(null)

  //Get token from sessionStorage
  let token = sessionStorage.getItem('token')

  //Add user id from session

  //Get wrokspace info
  let currentWorkspace = localStorage.getItem('currentWorkspace')

  useEffect(() => {
    const getuser = async () => {
      const user = await GetUserInfo()

      //Set user info in state
      setUserInfo({
        userId: user[0]._id,
        token,
        currentWorkspace
      })

      //Check if user id is valid and get user organization

      if (user[0]._id !== '') {
        const org_url = `/organizations/${currentWorkspace}/plugins`
        authAxios
          .get(org_url)
          .then(res => setOrganizationInfo(res.data.data))
          .catch(err => console.log(err))
      } else {
        console.log('Checking')
      }

      console.log('done getting')
    }
    getuser()
  }, [])

  // // console.log('before getting')

  return { organizationInfo, userInfo }
}
