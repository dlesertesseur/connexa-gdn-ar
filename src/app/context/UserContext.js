"use client";
import { signin } from "@/data/auth";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

const UserProvier = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticate = async (parameters) => {
    try {
      const data = await signin(parameters);
      setUser(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  return <UserContext.Provider value={{ user, authenticate }}>{children}</UserContext.Provider>;
};

export default UserProvier;
