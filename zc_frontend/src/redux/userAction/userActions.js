import axios from 'axios'
import { LOGIN_USER_SUCCESS } from '../userConstants/userConstants'

const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  userProfile: payload
})

export const loginUser = (url, loginInfo, setCookies, history) => {
  return dispatch => {
    axios
      .post(url, loginInfo)
      .then(({ data }) => {
        dispatch(loginUserSuccess(data.data.user))
        setCookies('Zuri_Chat', data.data.token, { path: '/' })
        history.push('/home')
      })
      .catch(e => {
        alert('Error: Wrong Email or password ')
        history.push('/login')
      })
  }
}
