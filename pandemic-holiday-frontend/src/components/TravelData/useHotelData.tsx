import axios from "axios";
import { useEffect, useState } from "react";

export const useHotelData = () => {
  const [hotelTableData, setHotelTableData] = useState<string[]>([]);

  const getHotelData = async () => {
    try {
      const response = await axios.get(
        `https://private-anon-3c17d5d2ab-tshapiv20.apiary-mock.com/hotels/get_list/?search_radius=10`
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
