import { fetchUsersStart, loaded, fetchUsersError } from "../action";

const fetchUsers = async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    dispatch(loaded(users)); // Dispatch success action
  } catch (error) {
    dispatch(fetchUsersError(error.message)); // Dispatch error action
  }
};

export default fetchUsers;
