import { ScrollArea, Stack } from "@mantine/core";
import React from "react";
import AppItem from "./AppItem";

const AppMenu = ({ locale }) => {
  const items = [
    {
      id: "Dashboard",
      name: "Dashboard",
      description: "Monitor del estado general de procesos",
      href: `/${locale}/modules/dashboard`,
    },
    {
      id: "Importaciones",
      name: "Importaciones",
      description: "Monitor del estado actual de las importaciones",
      href: `/${locale}/modules/importations`,
    },
    {
      id: "Logistica",
      name: "Logistica",
      description: "Monitor del estado actual de la logistica",
      href: `/${locale}/modules/logistics`,
    },
  ];
  return (
    <ScrollArea w={"100%"} h={"100%"}>
      <Stack align="flex-start" w={"100%"}>
        {items.map((i) => {
          const ret = <AppItem key={i.id} name={i.name} description={i.description} href={i.href} />;
          return ret;
        })}
      </Stack>
    </ScrollArea>
  );
};

export default AppMenu;
