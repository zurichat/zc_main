import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userReducer/userReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    rootReducer: userReducer,
  },

  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;