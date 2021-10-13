import { initialState } from "../initialState"
import { LOGIN_USER_SUCCESS } from "../userConstants/userConstants"

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    case "SET_ACCESSIBILITY_SETTINGS_SUCCESS":
      return {
        ...state,
        error: null,
        accessibility: action.payload
      }
    case "SET_ACCESSIBILITY_SETTINGS_FAILURE":
      return {
        ...state,
        accessibility: "",
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer
