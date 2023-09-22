import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../Redux/users/thunk/fetchUsers";
import User from "../Component/User/User";
export default function Home() {
  const loading = useSelector((state) => state?.usersState?.loading);
  const usersState = useSelector((state) => state?.usersState?.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/Spinner-3.gif" />
      </div>
    );
  }

  return (
    <div className=" container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {usersState?.users?.map((user) => (
          <User key={user?.id} user={user} />
        ))}
      </div>
    </div>
  );
}
