import React, { useState, useEffect } from "react";

import { PolarArea } from "react-chartjs-2";
import { AddIcon } from "@chakra-ui/icons";
import IccDetails from "./IccDtails";
import axios from "axios";
import {
  Container,
  Box,
  Badge,
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
import {
  DragHandleIcon,
  CalendarIcon,
  EditIcon,
  BellIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

export default function Icc({ item, key }) {
  const [sems, setsems] = useState([]);
  useEffect(() => {
    console.log("0000000000000000000000");
    console.log(item.semesters);
    console.log("0000000000000000000000");
    axios
      .get("/api/getsem", {
        params: {
          semarray: item.semesters,
        },
      })
      .then((res) => {
        setsems(res.data);
        console.log("seeeeeeeeeeeeeeeeems");
        console.log(res.data);
        console.log("seeeeeeeeeeeeeeeeems");
      });
  }, []);

  const [showDetail, setshowDetail] = useState(false);
  const [spec, setspec] = useState(["ESIL", "MI", "SI"]);
  return !showDetail ? (
    <Flex
      w="90%"
      minH="150px"
      bg="#E5E5E5"
      mt={5}
      flexDir="column"
      borderRadius={10}
      border="1px solid #CCCCCC"
      overflow="hidden"
      key={key}
    >
      <Center w="100%" h="50%">
        {item.name}
      </Center>
      <Flex h="50%" w="100%">
        <Center flex="1" flexWrap="wrap">
          {sems.map((it, index) => {
            return (
              <Badge bg="red" color="white" m={1}>
                {it.name}
              </Badge>
            );
          })}
        </Center>
        <Center flex="1" flexWrap="wrap">
          {item.groups.map((group, ind) => {
            return (
              <Badge bg="green" color="white" m={1}>
                {group}
              </Badge>
            );
          })}
        </Center>
        <Center flex="1">
          <Badge bg="blue" color="white" m={1}>
            {item.cycle}
          </Badge>
        </Center>
      </Flex>
    </Flex>
  ) : (
    <IccDetails />
  );
}
