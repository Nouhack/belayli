import React, { useState, useEffect } from "react";

import { PolarArea } from "react-chartjs-2";
import { AddIcon } from "@chakra-ui/icons";
import IccDetails from "./IccDtails";
import axios from "axios";
import IccItem from "./iccItem";
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

export default function Dashboard() {
  const [icc, seticc] = useState([]);
  useEffect(() => {
    console.log("reni hna");
    axios.get("/api/icc").then((res) => {
      seticc(res.data);
      console.log(res.data);
    });
  }, []);

  const [showDetail, setshowDetail] = useState(false);
  const [spec, setspec] = useState(["ESIL", "MI", "SI"]);
  return !showDetail ? (
    <Flex
      w="85%"
      h="100vh"
      bg="white"
      p="20px"
      direction="column"
      justify="center"
      overflowY="auto"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <Flex w="100%" minH="20px" justify="flex-start">
        <IconButton
          aria-label="Search database"
          icon={<AddIcon />}
          onClick={() => setshowDetail(true)}
        />
      </Flex>
      {icc.map((item, index) => {
        return <IccItem item={item} key={index} />;
      })}
    </Flex>
  ) : (
    <IccDetails />
  );
}
