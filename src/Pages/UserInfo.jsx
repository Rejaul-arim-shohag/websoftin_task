import React, { useEffect, useState } from "react";
import UserDetails from "../Component/UserDetails/UserDetails";
import { useParams } from "react-router-dom";
export default function UserInfo() {
  const { id } = useParams();
  const [userDetailsData, setUserDetailsData] = useState({
    isLoading: false,
    user: {},
  });
  const handleFetchUserDetails = async (userId) => {
    setUserDetailsData({ isLoading: true, user: [] });
    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const user = await response.json();
      setUserDetailsData({
        isLoading: false,
        user,
      });
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    handleFetchUserDetails(id);
  }, [id]);
  if (userDetailsData.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/Spinner-3.gif" />
      </div>
    );
  }
  return <UserDetails user={userDetailsData?.user} />;
}
