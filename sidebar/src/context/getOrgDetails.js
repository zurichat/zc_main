import { authAxios } from '../utils/Api'
import { ACTIONS } from '../root.component'

export const getOrgDetails = (dispatch, currentWorkspace) => {
  authAxios.get(`/organizations/${currentWorkspace}/members`).then(res => {
    //Get current user details from organization workspace
    let currentUser = res.data.data.find(user => user.email === userEmail)

    //Check role of current user
    let userRole =
      currentUser?.role === 'owner' || currentUser?.role === 'admin'

    //add user role to global state
    dispatch({ type: ACTIONS.ADD_USER_INFO, payload: userRole })

    let existingEmails = []
    res.data.data.map(user => existingEmails.push(user.email))

    //Add organization email to global state
    dispatch({ type: ACTIONS.ADD_ORGANIZATION_EMAIL, payload: existingEmails })
  })
}
