import React from "react";

export default function UserDetails({ user }) {
  const { id, firstName, lastName, image, email, phone, birthDate, university } = user;
  console.log("user", user);
  return (
    <div className="lg:w-1/3 md:w-1/3 w-full mx-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center justify-center">
      <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={image} alt="User" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name : {`#${id}:${firstName} ${lastName}`}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">Email : {email}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Phone : {phone}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">Date Of Birth : {birthDate}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">university : {university}</span>
    </div>
  );
}
