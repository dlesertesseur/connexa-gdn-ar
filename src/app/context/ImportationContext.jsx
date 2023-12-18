import { useTranslations } from "next-intl";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ImportationContext = createContext();

export const useImportationContext = () => {
  const ctx = useContext(ImportationContext);
  return ctx;
};

const ImportationProvider = ({ children }) => {
  const t = useTranslations("importations");
  const [businessObjectiveSelected, setBusinessObjectiveSelected] = useState(t("label.all"));
  const [analystSelected, setAnalystSelected] = useState(t("label.all"));

  return (
    <ImportationContext.Provider
      value={{
        businessObjectiveSelected,
        setBusinessObjectiveSelected,
        analystSelected,
        setAnalystSelected,
      }}
    >
      {children}
    </ImportationContext.Provider>
  );
};

export default ImportationProvider;
