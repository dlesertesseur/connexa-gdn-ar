"use client";
import { Grid, Group, Paper, Stack, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AppItem = ({ name, description, href }) => {
  const [color, setColor] = useState("gray.1");
  const router = useRouter();
  return (
    <UnstyledButton
      onClick={() => {
        router.replace(href);
      }}
    >
      <Paper
        p={6}
        radius={"md"}
        withBorder
        w={266}
        onMouseOver={() => {
          setColor("gray.2");
        }}
        onMouseOut={() => {
          setColor("gray.1");
        }}
        bg={color}
      >
        <Grid align="center" gutter={0}>
          <Grid.Col span="auto">
            <Stack m={0} align="stretch" gap={"xs"}>
              <Text size="md" fw={700}>
                {name}
              </Text>
              <Text size="xs" truncate={false} c={"gray.6"}>
                {description}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={1}>
            <Group justify="flex-end">
              <IconChevronRight color="gray" size={16} />
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </UnstyledButton>
  );
};

export default AppItem;
