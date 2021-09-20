import { useReducer } from 'react'

const isVisible = false

const reducer = (state, action) => {
  switch (action) {
    case 'show':
      return true
    case 'hide':
      return false
    default:
      return isVisible
  }
}

const usePasswordVisibilityReducer = () => {
  return useReducer(reducer, isVisible)
}

export default usePasswordVisibilityReducer
