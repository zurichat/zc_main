import Sidebar from './sidebar.component'
import { BrowserRouter } from 'react-router-dom'
import { useReducer } from 'react'

export const ACTIONS = {
  ADD_USER_INFO: 'add-user-info',
  ADD_ITEM: 'add',
  UPDATE_ITEM: 'update',
  ADD_ORGANIZATION_EMAIL: 'add-org-email'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      //Add items to sidebar
      let sidebar_data = action.payload
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          ...sidebar_data
        }
      }
    case ACTIONS.UPDATE_ITEM:
      //Update sidebar
      console.log('can update')
      return state

    case ACTIONS.ADD_USER_INFO:
      //Add user info
      let userInfo = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          ...userInfo
        }
      }
    case ACTIONS.ADD_ORGANIZATION_EMAIL:
      //set organization info
      let organizationEmail = action.payload
      return { ...state, organization_email: organizationEmail }
    default:
      return state
  }
}

export default function Root(props) {
  const [state, dispatch] = useReducer(reducer, {})

  return (
    <BrowserRouter>
      <Sidebar state={state} dispatch={dispatch} />
    </BrowserRouter>
  )
}
