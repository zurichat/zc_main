export const setModal = bool => ({
  type: "TOGGLE_MODAL",
  payload: bool
});

export const fetchPlugins = () => ({
  type: "GET_PLUGINS_START"
});

export const loadPlugins = data => ({
  type: "GET_PLUGINS_SUCCESSFULL",
  payload: {
    data
  }
});

export const setPluginId = id => ({
  type: "SET_PLUGIN_ID",
  payload: id
});
