import React from "react";
import { CovidDataTable } from "./CovidDataTable";
import { useCovidData } from "./useCovidData";

// @ts-ignore
export const CovidDataContext = React.createContext();

export const CovidData = () => {
  const { covidTableData, setCovidTableData } = useCovidData();

  return (
    <CovidDataContext.Provider value={{ covidTableData, setCovidTableData }}>
      <CovidDataTable />
    </CovidDataContext.Provider>
  );
};
