import { Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  findAllAnalysts,
  findAllBusinessObjectives,
  findAllImportationStatuses,
  getProcessStatus,
} from "../../../../DataAccess/Custom/DGN/Importations";
import React from "react";
import AppHeader from "../../../../Components/AppHeader";
import ImportationStatusDetail from "./ImportationStatusDetail";
import ImportationsPanel from "./ImportationsPanel";
import ImportationProvider from "../../context/ImportationContext";
import ImportationProductsDetail from "./ImportationProductsDetail";

const DynamicApp = ({ app }) => {

  return (
    <Stack w={"100%"} spacing={0}>
      <AppHeader app={app} />

      <Stack spacing={"xs"} mt={"md"}>
        <ImportationProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ImportationsPanel
                  statuses={statuses}
                  processControl={processControl}
                  businessObjectives={businessObjectives}
                  analysts={analysts}
                />
              }
            />
            <Route exact path="/importationStatusDetail" element={<ImportationStatusDetail setError={setError} />} />
            <Route exact path="/importationStatusDetail/productsDetail" element={<ImportationProductsDetail setError={setError} />} />
          </Routes>
        </ImportationProvider>
      </Stack>
    </Stack>
  );
};

export default DynamicApp;
