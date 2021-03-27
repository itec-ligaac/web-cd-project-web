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
      dataIndex: "code",
      title: "Code",
    },

    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "rate",
      title: "Rate",
    },
    {
      dataIndex: "tax",
      title: "Tax",
    },
  ];

  return (
    <>
      <Table
        //@ts-ignore
        dataSource={hotelTableData}
        scroll={{ x: 200, y: "maximum-content" }}
        columns={columns}
        style={{
          scale: 20,
        }}
      />
    </>
  );
};
