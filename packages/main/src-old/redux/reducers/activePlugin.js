import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pluginName: "",
  pluginPath: ""
};

export const activePluginSlice = createSlice({
  name: "activePlugin",
  initialState,
  reducers: {
    setActivePlugin: (state, { payload }) => {
      state.pluginName = payload.pluginName;
      state.pluginPath = payload.pluginPath;
    },
    setActivePluginPath: (state, { payload }) => {
      state.pluginPath = payload.pluginPath;
    }
  }
});

export const { setActivePlugin, setActivePluginPath } =
  activePluginSlice.actions;

export default activePluginSlice.reducer;
