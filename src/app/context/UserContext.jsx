"use client";
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

const UserProvier = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const authenticate = async (parameters) => {
    try {
      const body = JSON.stringify({
        email: parameters.email,
        password: parameters.password,
      });

      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      const res = await fetch("/api/auth", requestOptions);
      const data = await res.json();

      setUser(data.user);
      setToken(data.token);

      return data;
    } catch (error) {
      return error;
    }
  };

  return <UserContext.Provider value={{ user, token, authenticate }}>{children}</UserContext.Provider>;
};

export default UserProvier;
