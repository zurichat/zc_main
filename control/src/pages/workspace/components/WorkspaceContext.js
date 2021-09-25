import React, { useContext, useEffect, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import userOrganizations from './data'
import reducer from './workspaceReducer'
import axios from 'axios'

export const WorkspaceContext = React.createContext()

const initialState = {
  loading: false,
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  organizations: [],
  error: '',
  pageLoading: false
}

export const WorkspaceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const history = useHistory()

  useEffect(() => {
    dispatch({ type: 'ACTION_CALL_API' })

    getOrganizations()
  }, [])

  const getOrganizations = async () => {
    try {
      const response = await axios.get(
        `https://api.zuri.chat/users/${state.user.email}/organizations`,
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`
          }
        }
      )
      if (response.status !== 200) {
        throw Error(
          `Unable to fetch list of wokspaces, status code: ${response.status}`
        )
      }
      const { data } = await response.data
      dispatch({ type: 'ACTION_SUCCESSFUL', data: data })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ACTION_FAILED', error: error })
    }
  }

  const toggleSelected = id => {
    dispatch({ type: 'SELECT_WORKSPACE', payload: id })
  }

  const redirectPage = () => {
    dispatch({ type: 'LOADER_ACTION' })

    setTimeout(() => {
      dispatch({ type: 'PAGE_REDIRECT' })
      history.push('/home')
    }, 3000)
  }

  return (
    <WorkspaceContext.Provider
      value={{
        ...state,
        toggleSelected,
        redirectPage
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export const useWorkspaceContext = () => {
  return useContext(WorkspaceContext)
}
