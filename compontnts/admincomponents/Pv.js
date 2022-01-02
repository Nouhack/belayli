import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Pvone from "./pvs/Pvone";
import ClassCard from "../utl/ClassCard";
import ModuleCard from "../utl/ModuleCard";

export default function Pv() {
  const [data, setdata] = useState([]);
  const [modulescreen, setmodulescreen] = useState(false);
  const [pvscreen, setpvscreen] = useState(false);
  const [completedata, setcompletedata] = useState([]);
  const [selectedspec, setselectedspec] = useState("");
  const [selectedseme, setselectedseme] = useState("");

  useEffect(() => {
    axios.get("/api/teacher").then((res) => {
      console.log(
        new Set(
          [].concat.apply(
            [],

            res.data
              .map(
                (item) =>
                  item.class.filter((item2) => item2.specialty === "ISIL")[0]
              )
              .filter((item4) => item4)
              .map((item5) => item5.modules)
          )
        )
      );

      setdata(
        [].concat.apply(
          [],
          res.data.map(
            (item) =>
              item.class.map((item2) =>
                item2.groups.map((item3) => {
                  return {
                    specialty: item2.specialty,
                    semester: item2.semester,
                    group: item3,
                  };
                })
              )[0]
          )
        )
      );

      setcompletedata(res.data);
    });
  }, []);

  return !modulescreen ? (
    <Flex
      h="100vh"
      w="100%"
      justify="flex-start"
      align="center"
      overflowY="auto"
      direction="column"
    >
      {data.map((item, index) => {
        return (
          <ClassCard
            item={item}
            key={index}
            handler={setmodulescreen}
            selectedspechandler={setselectedspec}
            selectedsemehandler={setselectedseme}
          />
        );
      })}
    </Flex>
  ) : !pvscreen ? (
    <Flex
      h="100vh"
      w="100%"
      justify="center"
      align="center"
      overflowY="auto"
      direction="row"
      flexWrap="wrap"
    >
      {[
        ...new Set(
          [].concat.apply(
            [],
            completedata
              .map(
                (item) =>
                  item.class.filter(
                    (item2) =>
                      item2.specialty === selectedspec &&
                      item2.semester === selectedseme
                  )[0]
              )
              .filter((item4) => item4)
              .map((item5) => item5.modules)
          )
        ),
      ].map((item, index) => {
        return <ModuleCard pvhandler={setpvscreen} name={item} key={index} />;
      }) || []}
    </Flex>
  ) : (
    <Pvone selectedseme={selectedseme} selectedspec={selectedspec} />
  );
}
