import React, { createContext, useState } from "react";

// Create a context
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return <UserContext.Provider value={{ selectedUser, setSelectedUser }}>{children}</UserContext.Provider>;
}
