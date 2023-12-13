"use client";
import React from "react";
import { Group } from "@mantine/core";
import { SigninForm } from "./signin/SigninForm";
import { useUserContext } from "@/app/context/UserContext";

const ProtectRoute = ({ children, locale}) => {
  const { token } = useUserContext();

  return <Group>
    {token ? children : <SigninForm locale={locale}/>}
  </Group>;
};

export default ProtectRoute;
