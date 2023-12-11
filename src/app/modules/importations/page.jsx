import ImportationsPanel from "@/app/components/importations/ImportationsPanel";
import React from "react";
import { findAllAnalysts, findAllBusinessObjectives, getProcessStatus } from "@/data/Importations";
import { Stack } from "@mantine/core";

const Importations = async () => {

  const params = {
    token: user.token,
  };

  let statuses = null;
  let businessObjectives = null;
  let analysts = null;
  let processControl = null;

  try {
    processControl = await getProcessStatus(params);
    const list = await findAllImportationStatuses(params);
    if (!list.message) {
      statuses = list.filter((i) => i !== "");

      const events = await findAllBusinessObjectives(params);
      businessObjectives = events.filter((e) => e !== "");
      businessObjectives.unshift(t("importations.label.all"));

      analysts = await findAllAnalysts(params);
      analysts = analysts.filter((e) => e !== "");
      analysts.unshift(t("importations.label.all"));
    }
  } catch (error) {
    setError(error);
  }

  return (
    <Stack w={"100%"} spacing={"xs"} mt={"md"}>
      <ImportationsPanel
        statuses={statuses}
        processControl={processControl}
        businessObjectives={businessObjectives}
        analysts={analysts}
      />
    </Stack>
  );
};

export default Importations;
