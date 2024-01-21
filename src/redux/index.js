import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import filterReducer from "./slices/filter";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
  },
});

export default store;
