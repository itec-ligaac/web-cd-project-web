import axios from "axios";
import { useContext, useEffect, useState } from "react";
//@ts-ignore
import { TravelDataContext } from "./index.tsx";

export const useHotelData = () => {
  const [hotelTableData, setHotelTableData] = useState<string[]>([]);
  const [hotelCity, setHotelCity] = useState<any>("");
  const getHotelData = async () => {
    try {
      const options: any = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/locations/search",
        params: { query: hotelCity, locale: "en_US" },
        headers: {
          "x-rapidapi-key":
            "3dd760ef42mshb08c8d894f89d39p13ac55jsncd761634db24",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        },
      };

      const response = await axios
        .request(options)
        .then(function (response) {
          setHotelTableData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (err) {}
  };

  return {
    hotelTableData,
    setHotelTableData,
    useHotelData,
    getHotelData,
    hotelCity,
    setHotelCity,
  };
};
