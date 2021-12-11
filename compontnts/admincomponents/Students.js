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

export default function Specialty() {
  const [specialtyList, setspecialtyList] = useState([
    "Physics",
    "math",
    "Algorithme",
    "English",
    "Algebra",
  ]);
  const [spec, setspec] = useState({
    1: "Spec 1",
    2: "Spec 2",
    3: "Spec 3",
    4: "Spec 4",
  });
  const [groups, setgroups] = useState({
    1: "G 1",
    2: "G 2",
    3: "G 3",
    4: "G 4",
    5: "G 5",
  });
  const [seme, setsem] = useState({
    1: "L 1",
    2: "L 2",
    3: "L 3",
    4: "L 4",
    5: "L 5",
    6: "L 6",
    7: "M 1",
    8: "M 2",
  });
  const [columns, setcolumns] = useState([
    { title: "Name ", field: "name" },
    { title: "Username ", field: "username" },
    { title: "Matricule ", field: "matricule" },
    { title: "Password", field: "password" },
    {
      title: "Spécialité",
      field: "Spécialité",
      lookup: spec,
    },
    { title: "Semester", field: "semester", lookup: seme },
    { title: "Group", field: "group", lookup: groups },
    { title: "Email", field: "email" },
    { title: "Phone", field: "Phone" },
  ]);

  const [data, setdata] = useState([
    {
      name: "saiche",
      username: "nouh",
      matricule: "HJH34",
      password: "sdlkfjslfdkj",
      Spécialité: 2,
      semester: 3,
      group: 1,
      email: "nouh@gmail.com",
      Phone: "4935345",
    },
  ]);
  const [showSemester, setshowSemester] = useState(false);
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      direction="column"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <MaterialTable
        style={{
          maxHeight: "100%",
          border: "none",
          boxShadow: "none",
        }}
        columns={columns}
        data={data}
        title="Students List"
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setdata([...data, newData]);

                resolve();
              }, 1000);
            }),
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
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setdata([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </Flex>
  );
}
