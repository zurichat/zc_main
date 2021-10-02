import Sidebar from './sidebar.component'
import { BrowserRouter } from 'react-router-dom'
import { useReducer } from 'react'

export const ACTION = {
  ADD_SIDEBAR_DATA: 'add-sidebardata',
  UPDATE_SIDEBAR_DATA: 'update-sidebardata'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD_SIDEBAR_DATA:
      if (action.payload && Object.keys(action.payload).length !== 0) {
        let newdata = action.payload
        return { ...state, newdata }
      }
      console.log(action.payload, 'from dispatch function')
      return state
    case ACTION.UPDATE_SIDEBAR_DATA:
      return state
    default:
      return state
  }
}

export default function Root(props) {
  const [state, dispatch] = useReducer(reducer, {})

  return (
    <BrowserRouter>
      <Sidebar dispatch={dispatch} state={state} />
    </BrowserRouter>
  )
}
