"use client"
import React from "react";
import { redirect } from "next/navigation";
import { useUserContext } from "../context/UserContext";

const ProtectRoute = ({children}) => {
  const { user } = useUserContext();
  return <div>
    {user.token ? children : redirect('/signin')}
  </div>;
};

export default ProtectRoute;
