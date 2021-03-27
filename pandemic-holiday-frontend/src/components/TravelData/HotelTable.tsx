import { Input, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
//@ts-ignore
import { TravelDataContext } from "./index.tsx";

export const HotelTableData = () => {
  const { hotelTableData, setHotelTableData } = useContext(TravelDataContext);

  const columns = [
    {
      dataIndex: "name",
      title: "name",
    },
    {},
  ];

  return (
    <>
      <Table
        //@ts-ignore
        dataSource={hotelTableData?.suggestions?.[1]?.entities}
        columns={columns}
        style={{
          scale: 20,
        }}
      />
    </>
  );
};
