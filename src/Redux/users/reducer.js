import { FETCH_USER_START, LOADED, FETCH_USERS_ERROR } from "./actionType";
import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, loading: true, error: null };
    case LOADED:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default reducer;
