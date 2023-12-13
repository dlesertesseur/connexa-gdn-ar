"use client";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import { UserButton } from "./UserButton";
import AppMenu from "./AppMenu";
import Logo from "./Logo";

export default function AppFrame({ children, locale }) {
  const [mobileOpened, toggleMobile] = useDisclosure();
  const [desktopOpened, toggleDesktop] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between" align="center" px={"xs"}>
          <Group >
            <Burger opened={mobileOpened} onClick={toggleMobile.toggle} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop.toggle} visibleFrom="sm" size="sm" />
          </Group>
          <Group >
            <Logo size={60}/>
            {/* <Logo height={60} width={60*1.77
            } image={"/logo/gdn.jpg"}/> */}
          </Group>
          <Group >
            <UserButton/>
          </Group>

        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppMenu/>
        </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
