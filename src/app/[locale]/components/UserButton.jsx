import { useUserContext } from "@/app/context/UserContext";
import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

export function UserButton() {

  const {user} = useUserContext();

  return (
    <UnstyledButton>
      <Group>
        <Avatar
          src={`${user.urlImage}`}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {`${user.lastname}, ${user.firstname}`}
          </Text>

          <Text c="dimmed" size="xs">
          {`${user.email}`}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
