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

export default function Calendars() {
  const [data, setdata] = useState([
    {
      number: 1,
      matricule: "K4HKJ4HKH",
      name: "mehdi slamani",
      unitefond: "0.0",
      unitemethod: "0.0",
      unitedecouv: "0.0",
      unitetransver: "0.0",
      moy: "0.0",
      cred: 0,
      resul: "SNA",
    },
    {
      number: 2,
      matricule: "LKSDJF003R",
      name: "atman walid",
      unitefond: "0.0",
      unitemethod: "0.0",
      unitedecouv: "0.0",
      unitetransver: "0.0",
      moy: "0.0",
      cred: 0,
      resul: "SNA",
    },
    {
      number: 3,
      matricule: "KLJSDF4343",
      name: "rachide malik",
      unitefond: "0.0",
      unitemethod: "0.0",
      unitedecouv: "0.0",
      unitetransver: "0.0",
      moy: "0.0",
      cred: 0,
      resul: "SNA",
    },
    {
      number: 4,
      matricule: "LKJSFD4534",
      name: "manel souhila",
      unitefond: "0.0",
      unitemethod: "0.0",
      unitedecouv: "0.0",
      unitetransver: "0.0",
      moy: "0.0",
      cred: 0,
      resul: "SNA",
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
        title="pv specialite 1 semester 1 group 2"
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
            title: "Unite Fontamental",
            field: "unitefond",
          },
          {
            title: "Unite Methodologique",
            field: "unitemethod",
          },
          {
            title: "Unite Decouverte 1",
            field: "unitedecouv",
          },
          {
            title: "Unite Transversale 1",
            field: "unitetransver",
          },
          {
            title: "MOY ",
            field: "moy",
          },
          {
            title: "CRED",
            field: "cred",
          },
          {
            title: "RESUL",
            field: "resul",
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
