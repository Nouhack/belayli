import React, { useState } from "react";
import MaterialTable from "material-table";

import {
  Container,
  Box,
  Stack,
  HStack,
  Avatar,
  Center,
  IconButton,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
export default function studenttable() {
  const [columns, setcolumns] = useState([
    { title: "Name & Username", field: "name", editable: "never" },

    { title: "Test 1", field: "test1", type: "numeric" },
    { title: "Test 2", field: "test2", type: "numeric" },
    {
      title: "TP / TD",
      field: "tptd",
      type: "numeric",
      editable: "never",
    },
    { title: "Examain", field: "exam", type: "numeric" },
    { title: "Moyenne", field: "avg", type: "numeric" },
  ]);

  const [data, setdata] = useState([
    {
      name: "Mehmet",
      tptd: 10,
      test1: 10.11,
      test2: 12.23,
      exam: 9,
      avg: 10,
    },
    {
      name: "Wahid",
      tptd: 11,
      test1: 12,
      test2: 18,
      exam: 19,
      avg: 18,
    },
    {
      name: "rahim",
      tptd: 10,
      test1: 11,
      test2: 11,
      exam: 10,
      avg: 10.33,
    },
    {
      name: "mouloud",
      tptd: 12,
      test1: 12,
      test2: 12,
      exam: 12,
      avg: 12,
    },
    {
      name: "Saiche",
      tptd: 17,
      test1: 12,
      test2: 18,
      exam: 19,
      avg: 18,
    },
  ]);
  return (
    <MaterialTable
      style={{
        maxHeight: "100%",
        border: "none",
        boxShadow: "none",
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setdata([...dataUpdate]);

              resolve();
            }, 1000);
          }),
      }}
      columns={columns}
      data={data}
      title="Students List"
    />
  );
}
