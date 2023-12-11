"use client";
import React from "react";
import { useUserContext } from "../context/UserContext";
import { Group } from "@mantine/core";
import SiginForm from "./signin/SiginForm";

const ProtectRoute = ({ children }) => {
  const { user } = useUserContext();
  console.log("ProtectRoute user -> ", user);

  return <Group>
    {user?.token ? children : <SiginForm />}
  </Group>;
};

export default ProtectRoute;
