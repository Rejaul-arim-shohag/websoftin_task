import { FETCH_USERS_ERROR, FETCH_USER_START, LOADED } from "./actionType.js";

export const fetchUsersStart = () => {
  return {
    type: FETCH_USER_START,
  };
};

export const loaded = (users) => {
  return {
    type: LOADED,
    payload: users,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};
