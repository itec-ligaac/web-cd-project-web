import React, { useState } from "react";
import axios from "axios";
import { Select, Card, Input, Button } from "antd";
import Cities from "../city.list.json";
import styled from "styled-components";
import { useHotelData } from "./useHotelData";
import { HotelTableData } from "./HotelTable";
import { Map } from "./map";

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
  const {
    hotelTableData,
    setHotelTableData,
    hotelCity,
    setHotelCity,
    getHotelData,
  } = useHotelData();
  const [selectedCityWeather, setSelectedCityWeather] = useState<any>("");

  var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2F0YWxpbmNoaXRhIiwiYSI6ImNrbXJ6c2oyczBjbTEybm14bHdvaWpta24ifQ.I0p207zOOFAoHTHyf4Uueg";

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
    <TravelDataContext.Provider
      value={{ hotelTableData, setHotelTableData, hotelCity, setHotelCity }}
    >
      <Container>
        <Card
          title="Search for top 3 hotels in your city. Cut Away hours of
         seeking through hundreds of hotels!
        "
          style={{ width: "60%", margin: "20px" }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <Input
              value={hotelCity}
              placeholder="look for hotels in your city"
              onChange={(e: any) => {
                setHotelCity(e.target.value);
              }}
              style={{ marginRight: "10px" }}
            />
            <Button onClick={() => getHotelData()}>Search</Button>
          </div>
          <HotelTableData />
        </Card>
        <Card
          title="Explore the world map!"
          style={{
            width: "50%",
            margin: "20px",
            height: "400px",
          }}
        >
          <Map />
        </Card>
      </Container>

      <Container>
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
        <Card
          title="Travelling during the pandemic"
          style={{ width: "80%", margin: "20px" }}
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
