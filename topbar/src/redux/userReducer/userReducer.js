import { initialState } from '../initialState'
import { LOGIN_USER_SUCCESS, TOGGLE_DARK_MODE } from '../userConstants/userConstants'

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return action.userProfile
    case TOGGLE_DARK_MODE:
      return { userProfile:state.userProfile, darkMode:action.payload }
    default:
      return state
  }
}
