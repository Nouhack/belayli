import React, { useState } from "react";

import { PolarArea } from "react-chartjs-2";
import { AddIcon } from "@chakra-ui/icons";
import IccDetails from "./IccDtails";
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
      {spec.map((item, index) => {
        return (
          <Flex
            w="90%"
            minH="150px"
            bg="#E5E5E5"
            mt={5}
            flexDir="column"
            borderRadius={10}
            border="1px solid #CCCCCC"
            overflow="hidden"
          >
            <Center w="100%" h="50%">
              {item}
            </Center>
            <Flex h="50%" w="100%">
              <Center flex="1" flexWrap="wrap">
                <Badge bg="red" color="white" m={1}>
                  S1
                </Badge>
                <Badge bg="red" color="white" m={1}>
                  S2
                </Badge>
                <Badge bg="red" color="white" m={1}>
                  S3
                </Badge>
                {item === "SI" && (
                  <Badge bg="red" color="white" m={1}>
                    S4
                  </Badge>
                )}
              </Center>
              <Center flex="1" flexWrap="wrap">
                <Badge bg="green" color="white" m={1}>
                  G1
                </Badge>
                <Badge bg="green" color="white" m={1}>
                  G2
                </Badge>
                <Badge bg="green" color="white" m={1}>
                  G3
                </Badge>
                {item === "ESIL" && (
                  <>
                    <Badge bg="green" color="white" m={1}>
                      G4
                    </Badge>
                    <Badge bg="green" color="white" m={1}>
                      G5
                    </Badge>
                  </>
                )}
              </Center>
              <Center flex="1">
                {item == "ESIL" ? (
                  <Badge bg="blue" color="white" m={1}>
                    L2
                  </Badge>
                ) : item === "MI" ? (
                  <Badge bg="blue" color="white" m={1}>
                    L1
                  </Badge>
                ) : (
                  <Badge bg="blue" color="white" m={1}>
                    L3
                  </Badge>
                )}
              </Center>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  ) : (
    <IccDetails />
  );
}
