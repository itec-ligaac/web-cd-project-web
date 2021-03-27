import axios from "axios";
import { useEffect, useState } from "react";

interface covidData {
  id: string;
  Country: string;
  Continent: string;
  Infection_Risk: number;
}

export const useCovidData = () => {
  const [covidTableData, setCovidTableData] = useState<string[]>([]);
  console.log(covidTableData);
  const getDefaultCovidData = async () => {
    try {
      const response = await axios.get(
        `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`,
        {
          headers: {
            "x-rapidapi-key":
              "3495a04400msh59e397487b777aep1e40d4jsn9c09de1c11b3",
            "x-rapidapi-host":
              "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          },
        }
      );

      setCovidTableData(
        response.data.map((row: any) => ({
          Country: row.Country,
          Continent: row.Continent,
          Infection_Risk: row.Infection_Risk,
          key: row.id,
        }))
      );
    } catch (error) {
      console.info(error);
    }
  };
  useEffect(() => {
    getDefaultCovidData();
  }, []);

  return {
    covidTableData,
    setCovidTableData,
    useCovidData,
  };
};
