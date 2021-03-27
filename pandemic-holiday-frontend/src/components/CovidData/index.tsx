import React from "react";
import { CovidDataTable } from "./CovidDataTable";
import { useCovidData } from "./useCovidData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

// @ts-ignore
export const CovidDataContext = React.createContext();

export const CovidData = () => {
  const { covidTableData, setCovidTableData } = useCovidData();

  return (
    <CovidDataContext.Provider value={{ covidTableData, setCovidTableData }}>
      <Container>
        <iframe
          width="60%"
          style={{ margin: "20px", height: "87vh" }}
          src="https://app.developer.here.com/coronavirus/"
          frameBorder="1"
        ></iframe>
        <div
          style={{
            width: "40%",
            margin: "20px",
            maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          <CovidDataTable />
        </div>
      </Container>
      <div style={{ width: "100%", padding: "20px", paddingTop: "20px" }}>
        <iframe
          height="876"
          width="100%"
          src="https://ourworldindata.org/coronavirus"
          frameBorder="1"
        ></iframe>
      </div>
    </CovidDataContext.Provider>
  );
};
