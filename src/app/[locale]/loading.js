import React from "react";
import { Box, Center, LoadingOverlay, Text } from "@mantine/core";

const loading = ({text = ""}) => {
  return (
    <Center>
      <Box pos="relative">
        <LoadingOverlay zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <Text c="dimmed">{text}</Text>
      </Box>
    </Center>
  );
};

export default loading;
