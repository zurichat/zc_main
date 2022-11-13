import { trimUrl, filterUrl } from "./filter-url";
import axios from "axios";
import { ACTIONS } from "../reducers/sidebar.reducer";

export const plugindata = async (
  dispatch,
  organizationInfo,
  currentWorkspace,
  userId
) => {
  organizationInfo &&
    organizationInfo.map(pluginInfo => {
      let { plugin } = pluginInfo;
      //Get sidebar url
      let sidebarUrl = plugin.sidebar_url;
      //trim sidebar url of extra slashes
      let trimmedUrl = trimUrl(sidebarUrl);
      //filter plugin domain to use as key
      let pluginKey = filterUrl(plugin.sidebar_url);

      //Call each plugin
      axios
        .get(
          `${
            trimmedUrl.includes("https://") || trimmedUrl.includes("http://")
              ? trimmedUrl
              : `https://${trimmedUrl}`
          }?org=${currentWorkspace}&user=${userId}`
        )
        .then(res => {
          try {
            let validPlugin = res.data?.data;
            if (Array.isArray(validPlugin)) {
              //Set plugin data to state
              let counter = 0;
              dispatch({
                type: ACTIONS.ADD_ITEM,
                payload: validPlugin
                  .filter(plugin => plugin.name)
                  .map(plugin => ({
                    ...plugin,
                    pluginKey: `${pluginKey}_${counter++}`
                  }))
              });
            } else if (typeof validPlugin === "object") {
              if (validPlugin.name !== undefined) {
                //Set plugin data to state
                dispatch({
                  type: ACTIONS.ADD_ITEM,
                  payload: [{ ...validPlugin, pluginKey }]
                });
              }
            }
          } catch (err) {
            return null;
          }
        })
        .catch(err => console.warn(err));
    });
};
