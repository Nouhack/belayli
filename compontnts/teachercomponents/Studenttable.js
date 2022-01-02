import React, { useState, useEffect } from "react";
import axios from "axios";
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
export default function studenttable({ criteria, module }) {
  useEffect(() => {
    axios
      .get("/api/studentclass", {
        params: {
          criteria: criteria,
        },
      })
      .then((res) => {
        console.log("____________________--");

        console.log("____________________--");
        setdata(
          res.data.students.map((item) => {
            return {
              matricule: item.matricule,
              id: item._id,

              name: item.name + " " + item.username,

              test1: res.data.notes.filter(
                (item2) => item2.studentID == item._id
              )[0]
                ? res.data.notes.filter(
                    (item2) =>
                      item2.studentID == item._id && item2.module === module
                  )[0]["test 1"]
                : null,

              test2: res.data.notes.filter(
                (item2) => item2.studentID == item._id
              )[0]
                ? res.data.notes.filter(
                    (item2) =>
                      item2.studentID == item._id && item2.module === module
                  )[0]["test 2"]
                : null,

              tptd: res.data.notes.filter(
                (item2) => item2.studentID == item._id
              )[0]
                ? res.data.notes.filter(
                    (item2) =>
                      item2.studentID == item._id && item2.module === module
                  )[0]["tp/td"]
                : null,

              exam: res.data.notes.filter(
                (item2) => item2.studentID == item._id
              )[0]
                ? res.data.notes.filter(
                    (item2) =>
                      item2.studentID == item._id && item2.module === module
                  )[0]["exam"]
                : null,

              avg: res.data.notes.filter(
                (item2) => item2.studentID == item._id
              )[0]
                ? res.data.notes.filter(
                    (item2) =>
                      item2.studentID == item._id && item2.module === module
                  )[0]["moyenne"]
                : null,
            };
          })
        );
      });
  }, []);
  const [columns, setcolumns] = useState([
    { title: "Name & Username", field: "name", editable: "never" },

    { title: "Matricule", field: "matricule", editable: "never" },
    { title: "Test 1", field: "test1", type: "numeric" },
    { title: "Test 2", field: "test2", type: "numeric" },
    {
      title: "TP / TD",
      field: "tptd",
      type: "numeric",
    },
    { title: "Examain", field: "exam", type: "numeric" },
    { title: "Moyenne", field: "avg", type: "numeric" },
  ]);

  const [data, setdata] = useState([]);
  return (
    <MaterialTable
      style={{
        height: "100%",
        border: "none",
        boxShadow: "none",
        width: "100%",
        whiteSpace: "nowrap",
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setdata([...dataUpdate]);
              console.log(dataUpdate);
              axios.post("/api/class", {
                _id: dataUpdate[0].id,
                data: {
                  module: module,
                  "test 1": dataUpdate[0].test1,
                  "test 2": dataUpdate[0].test2,
                  "tp/td": dataUpdate[0].tptd,
                  exam: dataUpdate[0].exam,
                  moyenne: dataUpdate[0].avg,
                },
              });
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
