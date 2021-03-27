import axios from "axios";
import { useContext, useEffect, useState } from "react";
//@ts-ignore
import { TravelDataContext } from "./index.tsx";

export const useHotelData = () => {
  const [hotelTableData, setHotelTableData] = useState<string[]>([]);

  const lat = useContext(TravelDataContext);
  const lon = useContext(TravelDataContext);
  const checkIn = useContext(TravelDataContext);
  const checkOut = useContext(TravelDataContext);

  const getHotelData = async () => {
    try {
      const response: any = await axios.get(
        `https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com?rooms=1&locale=en_US`,
        {
          data: {
            lat: lat,
            lon: lon,
            checkIn: checkIn,
            checkOut: checkOut,
          },
          headers: {
            "x-rapidapi-key":
              "3495a04400msh59e397487b777aep1e40d4jsn9c09de1c11b3",
            "x-rapidapi-host": "hotels-com-free.p.rapidapi.com",
          },
        }
      );
      // setHotelTableData(
      //   response.data.result.rates.map((row: any, index: any) => ({
      //     code: row.code,
      //     name: row.name,
      //     rate: row.rate,
      //     tax: row.tax,
      //     key: index,
      //   }))
      // );
      console.log(response);
    } catch (error) {
      console.info(error);
    }
  };
  useEffect(() => {
    getHotelData();
  }, []);

  return {
    hotelTableData,
    setHotelTableData,
    useHotelData,
  };
};
