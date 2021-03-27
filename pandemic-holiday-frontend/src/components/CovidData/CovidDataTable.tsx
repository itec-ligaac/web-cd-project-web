import { AutoComplete, Table } from "antd";
import { useContext } from "react";
import React from "react";
//@ts-ignore
import { CovidDataContext } from "./index.tsx";

interface covidData {
  id: string;
  Country: string;
  Continent: string;
  Infection_Risk: number;
}

export const CovidDataTable = () => {
  const { covidTableData, setCovidTableData } = useContext(CovidDataContext);

  const columns = [
    {
      dataIndex: "Country",
      title: "Country",
    },

    {
      title: "Continent",
      dataIndex: "Continent",
    },
    {
      dataIndex: "Infection_Risk",
      title: "Infection Risk",
      sorter: {
        compare: (a: covidData, b: covidData) =>
          a.Infection_Risk - b.Infection_Risk,
        multiple: 3,
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={covidTableData}
        scroll={{ x: "max-content" }}
        columns={columns}
        style={{
          marginLeft: 160,
          marginRight: 160,
          marginTop: 50,
        }}
      />
    </>
  );
};
