"use client";
import React from "react";
import { Group } from "@mantine/core";
import { SigninForm } from "../signin/SigninForm";
import { useUserContext } from "@/app/context/UserContext";

const ProtectRoute = ({ children }) => {
  const { user } = useUserContext();
  console.log("ProtectRoute user -> ", user);

  return <Group>
    {user?.token ? children : <SigninForm />}
  </Group>;
};

export default ProtectRoute;
