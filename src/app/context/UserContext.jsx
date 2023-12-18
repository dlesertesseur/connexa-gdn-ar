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
  const [error, setError] = useState(null);

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

      if (data.error) {
        console.log(data);
        setError(data.error);
      } else {
        setError(null);
        setUser(data.user);
        setToken(data.token);
      }

      return data;
    } catch (error) {
      return error;
    }
  };

  const logOut = () => {
    setError(null);
    setUser(null);
    setToken(null);
  };
  return <UserContext.Provider value={{ user, token, error, authenticate, logOut }}>{children}</UserContext.Provider>;
};

export default UserProvier;
