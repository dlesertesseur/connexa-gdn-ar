"use client";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

const UserProvier = ({ children }) => {
  const [user, setUser] = useState({token:"123"});
  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

export default UserProvier;
