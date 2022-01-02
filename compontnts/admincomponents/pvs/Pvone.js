import React, { useState } from "react";
import MaterialTable from "material-table";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
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

export default function Calendars({ selectedseme, selectedspec }) {
  const [data, setdata] = useState([
    {
      number: 1,
      matricule: "K4HKJ4HKH",
      name: "Mouloud Faraoun",
      test1: "11",
      test2: "11",
      tptd: "12",
      exam: "12",
      avg: "11",
    },
    {
      number: 2,
      matricule: "3LKJlkjlkj",
      name: "Mehdi Slamani",
      test1: "08",
      test2: "17",
      tptd: "15",
      exam: "14",
      avg: "14,55",
    },
    {
      number: 3,
      matricule: "KLDSJF33",
      name: "Mohamed seven",
      test1: "12",
      test2: "15",
      tptd: "16",
      exam: "14",
      avg: "14,55",
    },
    {
      number: 4,
      matricule: "DLKSJFLKDS",
      name: "Zakou Rabii",
      test1: "09",
      test2: "14",
      tptd: "18",
      exam: "16",
      avg: "14,55",
    },
    {
      number: 5,
      matricule: "KDLSJFLKSD",
      name: "Nirmo Ahmed",
      test1: "12",
      test2: "17",
      tptd: "13",
      exam: "13,12",
      avg: "14,43",
    },
    {
      number: 6,
      matricule: "LKSJDFFDS",
      name: "Khire dine Souali",
      test1: "13",
      test2: "10",
      tptd: "10",
      exam: "15",
      avg: "13,21",
    },
    {
      number: 7,
      matricule: "LSKJDHKH",
      name: "Souali Manel",
      test1: "10",
      test2: "10",
      tptd: "11",
      exam: "14",
      avg: "12",
    },
  ]);
  return (
    <Flex
      w="85%"
      h="100vh"
      direction="column"
      p="20px"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <MaterialTable
        style={{
          boxShadow: "none",
          borderRadius: 0,
          width: "100%",
        }}
        title={selectedspec + "   " + selectedseme}
        columns={[
          {
            title: "N",
            field: "number",
          },
          {
            title: "Matricule",
            field: "matricule",
            cellStyle: {},
          },
          {
            title: "Name & Username",
            field: "name",
            cellStyle: {},
          },
          {
            title: "Test 1",
            field: "test1",
          },
          {
            title: "Test 2",
            field: "test2",
          },
          {
            title: "Tp / Td",
            field: "tptd",
          },
          {
            title: "Exam",
            field: "exam",
          },
          {
            title: "Avg ",
            field: "avg",
          },
        ]}
        data={data}
        options={{
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            fontSize: "14px",
            whiteSpace: "nowrap",
          },
          exportButton: true,
        }}
      />
    </Flex>
  );
}
