import { combineReducers } from "redux";
import userReducer from "./users/reducer";

const rootReducer = combineReducers({
  usersState: userReducer,
});

export default rootReducer;
