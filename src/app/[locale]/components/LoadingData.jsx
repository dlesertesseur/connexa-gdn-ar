import { Box, Center, LoadingOverlay, Text } from "@mantine/core";
import React from "react";

const LoadingData = ({ text = "Loading..." }) => {
  return (
    <Center>
      <Box pos="relative">
        <LoadingOverlay zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <Text c="dimmed">{text}</Text>
      </Box>
    </Center>
  );
};

export default LoadingData;
