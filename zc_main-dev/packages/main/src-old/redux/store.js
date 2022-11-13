import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import activePluginReducer from "./reducers/activePlugin";
import counterReducer from "./reducers/counterTempSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activePlugin: activePluginReducer
  },
  middleware: getDefaultMiddleware =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware()
});
