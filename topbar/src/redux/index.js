import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userReducer/userReducer";

const store = configureStore({
  reducer: {
    rootReducer: userReducer,
  },
});


export default store;