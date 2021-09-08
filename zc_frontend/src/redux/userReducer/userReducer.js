import { initialState } from '../initialState'
import { LOGIN_USER_SUCCESS } from '../userConstants/userConstants'

export const userReducer = (state = initialState.userProfile, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return action.userProfile
    default:
      return state
  }
}
