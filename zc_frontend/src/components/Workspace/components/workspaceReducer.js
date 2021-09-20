
const reducer = (state, action) => {
  switch(action.type) {
    case 'SELECT_WORKSPACE':
      let tempOrg = state.organizations.map(org => {
        if(org.id === action.payload) {
          return {...org, selected: !org.selected}
        }
        return org
      })
      return {...state, organizations: tempOrg}
    case 'ACTION_CALL_API':
      return {...state, loading: true}
    case 'ACTION_SUCCESSFUL':
      const organizations = action.data.map(org => {
        return {...org, selected: false}
      })
      return {...state, organizations}
    case 'ACTION_FAILED':
      return {...state, error: action.error}
    default:
      return state
  }
}

export default reducer