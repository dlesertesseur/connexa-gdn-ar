"use client"
import ImportationProvider from "@/app/context/ImportationContext";
import { Title } from "@mantine/core";
import React from "react";

const layout = ({ children }) => {
  return <div>
    {/* <ImportationProvider>{children}</ImportationProvider> */}
    <Title>{"IMPORTACIONES"}</Title>
  </div>;
};

export default layout;
