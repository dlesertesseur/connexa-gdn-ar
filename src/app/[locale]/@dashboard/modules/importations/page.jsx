import React from "react";
import { Stack } from "@mantine/core";
import { cookies } from "next/headers";
import { findAllAnalysts, findAllBusinessObjectives, findAllImportationStatuses, getProcessStatus } from "@/data/Importations";
import ImportationsPanel from "../../components/importations/ImportationsPanel";

const Panel = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  
  const params = {
    token: token,
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
      analysts = await findAllAnalysts(params);
      analysts = analysts.filter((e) => e !== "");
    }

  } catch (error) {
    console.log(error);
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

export default Panel;
