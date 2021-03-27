import React, { useEffect } from "react";
import axios from "axios";
import { Select, Card } from "antd";
import Cities from "../city.list.json";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const { Option } = Select;

export const TravelData = () => {
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
    <Container>
      <Card
        style={{
          width: "30vw",
          height: "30vw",
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
  );
};
