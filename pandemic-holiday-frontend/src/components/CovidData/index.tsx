import React from "react";
import { CovidDataTable } from "./CovidDataTable";
import { useCovidData } from "./useCovidData";
import styled from "styled-components";
import useWindowWidth from "react-hook-use-window-width";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

// @ts-ignore
export const CovidDataContext = React.createContext();

export const CovidData = () => {
  const { covidTableData, setCovidTableData } = useCovidData();
  const width = useWindowWidth();
  return (
    <CovidDataContext.Provider value={{ covidTableData, setCovidTableData }}>
      <Container>
        <div
          style={{
            flexGrow: 3,
            margin: "20px",
            height: "87vh",
          }}
        >
          <iframe
            style={{ height: "87vh", width: "100%" }}
            src="https://app.developer.here.com/coronavirus/"
            frameBorder="1"
          ></iframe>
          <div style={{ marginBottom: "20px" }}>
            <a href="https://app.developer.here.com/coronavirus/">
              https://app.developer.here.com/coronavirus/
            </a>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            margin: "20px",
            maxHeight: "100%",
            overflow: "hidden",
            width: width > 500 ? "30%" : "100%",
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

        <div style={{ marginBottom: "20px" }}>
          <a href="https://ourworldindata.org/coronavirus">
            https://ourworldindata.org/coronavirus
          </a>
        </div>
      </div>
    </CovidDataContext.Provider>
  );
};
