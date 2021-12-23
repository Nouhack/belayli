import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AsyncSelect from "react-select/async";
import axios from "axios";
import {
  Container,
  Box,
  Stack,
  HStack,
  Select,
  Avatar,
  Center,
  IconButton,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Specialty() {
  const [selectedspecgroups, setselectedspecgroups] = useState([]);
  const [selectedspecsemester, setselectedspecsemester] = useState([]);
  const [studentsList, setstudentsList] = useState([]);
  //============================
  const [selectedspecname, setselectedspecname] = useState("");
  const [selectedsemname, setselectedsemname] = useState("");
  const [selectedgrpname, setselectedgrpname] = useState("");

  //============================
  const [specs, setspecs] = useState([]);
  useEffect(() => {
    axios.get("/api/student").then((res) => {
      setstudentsList(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/icc").then((res) => {
      setspecs(res.data);
    });
  }, []);
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

  var columns = [
    {
      title: "Name ",
      field: "name",
    },
    { title: "Username ", field: "username" },
    { title: "Matricule ", field: "matricule" },
    { title: "Password", field: "password" },
    {
      title: "Spécialité",
      field: "specialty",
      editComponent: (props) => (
        <Select
          w="200px"
          placeholder="Select Specialty"
          value={selectedspecname}
        >
          {specs.map((item, index) => {
            return (
              <option
                key={index}
                value={item.name}
                onClick={(e) => {
                  setselectedspecname(item.name);
                  setselectedspecgroups(item.groups);
                  axios
                    .get("/api/getsem", {
                      params: {
                        semarray: item.semesters,
                      },
                    })
                    .then((res) => {
                      setselectedspecsemester(res.data);
                    });
                }}
              >
                {item.name}
              </option>
            );
          })}
        </Select>
      ),
    },
    {
      title: "Semester",
      field: "semester",

      editComponent: (props) => (
        <Select
          placeholder="Select Semester(s)"
          w="200px"
          value={selectedsemname}
        >
          {selectedspecsemester.map((item, index) => {
            return (
              <option
                key={index}
                value={item.name}
                onClick={(e) => setselectedsemname(e.target.value)}
              >
                {item.name}
              </option>
            );
          })}
        </Select>
      ),
    },
    {
      title: "Group",
      field: "group",

      editComponent: (props) => (
        <Select placeholder="Select Group(s)" w="200px" value={selectedgrpname}>
          {selectedspecgroups.map((item, index) => {
            return (
              <option
                key={index}
                value={item}
                onClick={(e) => setselectedgrpname(e.target.value)}
              >
                {item}
              </option>
            );
          })}
        </Select>
      ),
    },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

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
        data={studentsList}
        title="Students List"
        options={{
          headerStyle: {
            backgroundColor: "red",
            color: "#FFF",
            fontWeight: "bold",
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              axios
                .post("/api/student", {
                  student: {
                    name: newData.name,
                    username: newData.username,
                    matricule: newData.matricule,
                    password: newData.password,
                    specialty: selectedspecname,
                    semester: selectedsemname,
                    group: selectedgrpname,
                    email: newData.email,
                    phone: newData.phone,
                  },
                })
                .then((res) => {
                  setstudentsList((per) => [
                    ...per,
                    {
                      name: newData.name,
                      username: newData.username,
                      matricule: newData.matricule,
                      password: newData.password,
                      specialty: selectedspecname,
                      semester: selectedsemname,
                      group: selectedgrpname,
                      email: newData.email,
                      phone: newData.phone,
                    },
                  ]);
                  resolve();
                });
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
