import React from "react";
import { Button, Flex, Group, ScrollArea, Stack, Text } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { convertMilisegToYYYYMMDDHHMISS } from "@/util";
import ImportarionCard from "./ImportarionCard";
import {getTranslations} from 'next-intl/server';

const ImportationsPanel = async ({ statuses, processControl, businessObjectives, analysts }) => {
  
  const t = await getTranslations("importations");
  
  // const { height } = useViewportSize();
  // const [refresh, setRefresh] = useState(null);
  // const [filterOpen, setFilterOpen] = useState(false);
  
  // businessObjectives.unshift(t("label.all"));
  // analysts.unshift(t("label.all"));

  const height = 600;

  const onRefresh = (e) => {
    setRefresh(new Date());
  };

  return (
    <Stack spacing={0}>
      <Group position="apart" mb={"md"}>
        {processControl ? (
          <Group position="left" align="center">
            {/* <ImportationFilterDialog
              businessObjectives={businessObjectives}
              analysts={analysts}
              opened={filterOpen}
              open={() => {
                setFilterOpen(true);
              }}
              close={() => {
                setFilterOpen(false);
              }}
              onRefresh={onRefresh}
            /> */}

            <Text size="md" weight={700}>{`${t("label.lastUpdate")} :`}</Text>
            <Text align="center" c="dimmed" size="md" fw={500}>
              {convertMilisegToYYYYMMDDHHMISS(processControl?.dateAndTime)}
            </Text>
          </Group>
        ) : null}

        <Button
          size="xs"
          icon={<IconRefresh size={16} />}
          // onClick={(e) => {
          //   onRefresh(e);
          // }}
        >
          {t("button.refresh")}
        </Button>
      </Group>

      <ScrollArea type="scroll" style={{ width: "100%", height: height}}>
        <Flex wrap={"wrap"} gap={"xs"} justify="center">
          {statuses?.map((s) => (
            <ImportarionCard key={s} status={s} lastUpdate={null} />
          ))}
        </Flex>
      </ScrollArea>
    </Stack>
  );
};

export default ImportationsPanel;
