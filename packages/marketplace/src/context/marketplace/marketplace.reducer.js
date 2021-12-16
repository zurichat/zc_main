export const INITIAL_STATE = {
  plugins: [],
  isModal: false,
  pluginId: null,
  isLoading: false,
  hasErr: null
};

export const marketplaceReducer = (state, action) => {
  switch (action.type) {
    case "GET_PLUGINS_START":
      return {
        ...state,
        isLoading: true,
        hasErr: null
      };
    case "GET_PLUGINS_SUCCESSFULL":
      return {
        ...state,
        isLoading: false,
        plugins: action.payload.data
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModal: action.payload
      };
    case "SET_PLUGIN_ID":
      return {
        ...state,
        pluginId: action.payload
      };
    default:
      return state;
  }
};
