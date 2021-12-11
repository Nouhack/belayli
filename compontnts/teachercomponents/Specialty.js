import React, { useState } from "react";

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
import Semester from "./Semester";

export default function Specialty() {
  const [specialtyList, setspecialtyList] = useState([
    "Physics",
    "math",
    "Algorithme",
    "English",
    "Algebra",
  ]);
  const [showSemester, setshowSemester] = useState(false);
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      flexWrap="wrap"
      justify="center"
      align="center"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
      overflowY="auto"
    >
      {showSemester ? (
        <Semester />
      ) : (
        <>
          {specialtyList.map((item, index) => {
            return (
              <Center
                key={index}
                w="42%"
                h={200}
                borderRadius={10}
                bg={"white"}
                boxShadow="xl"
                border="1px solid gray"
                color="black"
                m={3}
                onClick={() => {
                  setshowSemester(true);
                }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {item}
                </Text>
              </Center>
            );
          })}
        </>
      )}
    </Flex>
  );
}
//
/*

                  "#" +
                  (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)

*/
