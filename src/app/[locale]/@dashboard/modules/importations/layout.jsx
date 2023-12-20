import ImportationProvider from "@/app/context/ImportationContext";
import { Stack } from "@mantine/core";
import React from "react";

const layout = ({ children }) => {
  return (
    <Stack bg={"teal"}>
      <ImportationProvider>{children}</ImportationProvider>
    </Stack>
  );
};

export default layout;
