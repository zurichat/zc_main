import { useEffect, useState } from 'react'
import { authAxios } from './Api'
import { GetUserInfo } from '@zuri/control'

export const fetchUser = async () => {
  //Store user info in state
  const [userInfo, setUserInfo] = useState(null)

  //Get token from sessionStorage
  let token = sessionStorage.getItem('token')

  //Add user id from session

  //Get wrokspace info
  let currentWorkspace = localStorage.getItem('currentWorkspace')
  let _id = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const getuser = async () => {
      const user = await GetUserInfo()

      //Check if user id is valid and get user organization
      if (user[0]._id !== '') {
        const org_url = `/organizations/${currentWorkspace}/plugins`
        authAxios
          .get(org_url)
          .then(res => {
            setUserInfo({
              userId: user[0].org_id,
              token: token,
              currentWorkspace,
              organizationInfo: res.data.data
            })

            // console.log('done getting')
            // console.log(user)
          })
          .catch(err => console.log(err))
      } else {
        console.log('Checking')
      }
    }
    getuser()
  }, [])

  // console.log('before getting')

  return { userInfo }
}
