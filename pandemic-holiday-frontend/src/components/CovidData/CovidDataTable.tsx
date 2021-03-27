import { AutoComplete, Input, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import React from "react";
//@ts-ignore
import { CovidDataContext } from "./index.tsx";
import styled from "styled-components";

interface covidData {
  id: string;
  Country: string;
  Continent: string;
  Infection_Risk: number;
}

const TableHeader = styled.div`
  justify-content: space-between;
  flex-flow: row wrap;
  margin-bottom: 10px;
  min-width: 200px;
  display: flex;
`;

export const CovidDataTable = () => {
  const [filteredTableData, setFilteredTableData] = useState(null);
  const { covidTableData, setCovidTableData } = useContext(CovidDataContext);

  useEffect(() => {
    setFilteredTableData(covidTableData);
  }, [covidTableData]);

  const handleSearchChange = (event: any) => {
    if (event.target.value === "") setFilteredTableData(covidTableData);
    else
      setFilteredTableData(
        covidTableData.filter(
          (element: covidData) =>
            element.Country.toLowerCase().indexOf(
              event.target.value.toLowerCase()
            ) !== -1
        )
      );
  };

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
      <TableHeader>
        <Input
          onChange={handleSearchChange}
          style={{ width: "200px", marginTop: "10px" }}
          placeholder="Search Country"
        />
      </TableHeader>
      <Table
        //@ts-ignore
        dataSource={filteredTableData}
        scroll={{ x: 200, y: "maximum-content" }}
        columns={columns}
        style={{
          marginLeft: 160,
          marginRight: 160,
          marginTop: 50,
          scale: 20,
        }}
      />
    </>
  );
};
