import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select, Card } from "antd";
import Cities from "../city.list.json";
import styled from "styled-components";
import { useHotelData } from "./useHotelData";
import { HotelTableData } from "./HotelTable";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const { Option } = Select;

// @ts-ignore
export const TravelDataContext = React.createContext();

export const TravelData = () => {
  const { hotelTableData, setHotelTableData } = useHotelData();
  const [selectedCityWeather, setSelectedCityWeather] = useState<any>("");

  const getWeather = async (city: any) => {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98d72ef0d8203ca4560b3295e1efa62a`
      )
      .then(function (response: any) {
        console.log(response.data);
        setSelectedCityWeather(response.data);
      })
      .catch(function (responseError: any) {
        console.log(responseError.code);
      });
  };

  function handleSelectCity(value: any) {
    getWeather(value);
  }

  let cityArray = JSON.parse(JSON.stringify(Cities));

  cityArray = cityArray.sort((a: any, b: any) => {
    if (a.stat.population < b.stat.population) return 1;
    else return -1;
  });

  return (
    <TravelDataContext.Provider value={{ hotelTableData, setHotelTableData }}>
      <Container>
        <Card title="Search Hotels" style={{ width: "60%", margin: "20px" }}>
          <HotelTableData />
        </Card>
        <Card
          title="Check the weather"
          style={{
            width: "30%",
            height: "30vw",
            margin: "20px",
          }}
        >
          <Select
            showSearch
            defaultValue="Find a city!"
            style={{ width: "100%" }}
            onChange={handleSelectCity}
          >
            {cityArray.map((city: any) => {
              return (
                <Option key={city.id} value={city.name}>
                  {city.name}
                </Option>
              );
            })}
          </Select>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <h3>
              <b>{selectedCityWeather?.weather?.[0].description}</b>
            </h3>
            <h3>
              humidity: <b>{selectedCityWeather?.main?.humidity} %</b>
            </h3>
            <h3>
              wind speed:<b> {selectedCityWeather?.wind?.speed} Km/h</b>
            </h3>
            <h3>
              temperature:{" "}
              <b> {(selectedCityWeather?.main?.temp - 273.15).toFixed(2)} °C</b>
            </h3>
          </div>
        </Card>
      </Container>

      <Container>
        <Card
          title="Search Plane Tickets"
          style={{ width: "100%", margin: "20px" }}
        ></Card>
      </Container>

      <Container>
        <Card
          title="Explore the world map!"
          style={{ width: "50%", margin: "20px" }}
        ></Card>
        <Card
          title="Travelling during the pandemic"
          style={{ width: "50%", margin: "20px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            {" "}
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html">
              https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html
            </a>
          </div>
          <iframe
            width="100%%"
            height="600px"
            src="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
            frameBorder="1"
          ></iframe>
        </Card>
      </Container>
    </TravelDataContext.Provider>
  );
};
