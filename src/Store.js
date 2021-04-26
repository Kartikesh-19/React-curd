import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./component/User";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});