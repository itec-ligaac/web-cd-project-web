import axios from "axios";
import { useEffect, useState } from "react";

export const useHotelData = () => {
  const [hotelTableData, setHotelTableData] = useState<string[]>([]);

  const getHotelData = async () => {
    try {
      const response = await axios.get(
        `https://data.xotelo.com/api/rates?hotel_key=g295424-d18717692&chk_in=2021-06-13&chk_out=2021-06-18`
      );

      setHotelTableData(
        response.data.result.rates.map((row: any, index: any) => ({
          code: row.code,
          name: row.name,
          rate: row.rate,
          tax: row.tax,
          key: index,
        }))
      );
      console.log(response.data.result.rates);
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
