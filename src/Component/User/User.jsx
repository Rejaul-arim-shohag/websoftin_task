import React from "react";

export default function User({ user }) {
  const { id, firstName, lastName, image, email } = user;
  return (
    <div className="rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center justify-center">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="User" />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`#${id}:${firstName} ${lastName}`}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
      <button
        type="button"
        className="py-2.5 my-5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        View Details
      </button>
    </div>
  );
}
