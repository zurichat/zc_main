import React, { useContext, useEffect, useReducer } from 'react'
import userOrganizations from './data'
import reducer from './workspaceReducer'
import axios from 'axios'

export const WorkspaceContext = React.createContext()

const initialState = {
  loading: false,
  user: JSON.parse(sessionStorage.getItem('user')) || {},
  organizations: [],
  error: ''
}

export const WorkspaceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
          `Unable to fetch list of organizations, status code: ${response.status}`
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

  return (
    <WorkspaceContext.Provider
      value={{
        ...state,
        toggleSelected
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export const useWorkspaceContext = () => {
  return useContext(WorkspaceContext)
}
