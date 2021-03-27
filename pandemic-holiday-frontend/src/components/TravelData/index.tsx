import React, { useEffect } from "react";
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
  useEffect(() => {
    const getWeather = async () => {
      const response = await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=98d72ef0d8203ca4560b3295e1efa62a"
        )
        .then(function (response: any) {
          console.log(response.data);
        })
        .catch(function (responseError: any) {
          console.log(responseError.code);
        });
    };

    getWeather();
  }, []);

  function handleSelectCountry(value: any) {
    console.log(`selected ${value}`);
  }

  let cityArray = JSON.parse(JSON.stringify(Cities));

  cityArray = cityArray.sort((a: any, b: any) => {
    if (a.stat.population < b.stat.population) return 1;
    else return -1;
  });

  console.log(cityArray);

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
            defaultValue="Find a city!"
            style={{ width: 120 }}
            onChange={handleSelectCountry}
          >
            {cityArray.map((city: any) => {
              return (
                <Option key={city.id} value={city.name}>
                  {city.name}
                </Option>
              );
            })}
          </Select>
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
          title="News about travelling during the pandemic"
          style={{ width: "50%", margin: "20px" }}
        ></Card>
      </Container>
    </TravelDataContext.Provider>
  );
};
