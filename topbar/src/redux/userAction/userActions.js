import axios from "axios"
import { GetUserInfo } from "../../../../control/src/zuri-control"
import { LOGIN_USER_SUCCESS } from "../userConstants/userConstants"

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
        setCookies("Zuri_Chat", data.data.token, { path: "/" })
        history.push("/home")
      })
      .catch(e => {
        alert("Error: Wrong Email or password ")
        history.push("/login")
      })
  }
}

export function setUserAccessibilitySettings(
  link,
  accessibilitySettings,
  headers
) {
  return async function (dispatch) {
    try {
      const response = await axios.patch(link, accessibilitySettings, headers)
      dispatch({
        type: "SET_ACCESSIBILITY_SETTINGS_SUCCESS",
        payload: response.data.message
      })
    } catch (err) {
      dispatch({
        type: "SET_ACCESSIBILITY_SETTINGS_FAILURE",
        payload: err.message
      })
    }
  }
}

export function getUserInfo() {
  return async function (dispatch) {
    try {
      const userInfo = await GetUserInfo()
      if (userInfo === {}) {
        dispatch({
          type: "GET_USER_INFO_FAILURE",
          payload: "User info not found"
        })
      } else {
        dispatch({
          type: "GET_USER_INFO_SUCCESS",
          payload: userInfo[0].settings
        })
      }
    } catch (err) {
      dispatch({
        type: "GET_USER_INFO_FAILURE",
        payload: err.message
      })
    }
  }
}

export function setLoading() {
  return {
    type: "SET_LOADING"
  }
}
