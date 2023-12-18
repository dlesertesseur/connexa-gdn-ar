"use client"
import ImportationProvider from "@/app/context/ImportationContext";
import React from "react";

const layout = ({ children }) => {
  return <div>
    <ImportationProvider>{children}</ImportationProvider>
  </div>;
};

export default layout;
