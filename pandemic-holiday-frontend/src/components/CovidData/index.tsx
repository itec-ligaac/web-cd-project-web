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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <iframe
          width="70%"
          height="876"
          src="https://ourworldindata.org/coronavirus"
          frameBorder="1"
        ></iframe>
        <div style={{ marginBottom: "35px" }}></div>
        <iframe
          width="70%"
          height="576"
          src="https://app.developer.here.com/coronavirus/"
          frameBorder="1"
        ></iframe>
      </div>
    </CovidDataContext.Provider>
  );
};
