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
export default function AppealList() {
  const [appealsList, setappealsList] = useState([
    {
      name: "saiche nouh",
      module: "Physics",
      group: "G3",
      semester: "S2",
      on: "Test 1",
      message: "ma note ete 18 pas 15",
    },
    {
      name: "mouloud rahim",
      module: "Algo",
      group: "G2",
      semester: "S1",
      on: "Test 2",
      message: "j'ai eu 14",
    },
    {
      name: "Madjid houri",
      module: "English",
      group: "G1",
      semester: "S1",
      on: "Examain",
      message: "ya une faute svp reverifie ma note",
    },
  ]);
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      justify="center"
      align="center"
      direction="column"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
      overflowY="auto"
    >
      {appealsList.map((item, index) => {
        return (
          <Box
            key={index}
            w="90%"
            h={100}
            bg="white"
            border="1px solid gray"
            borderRadius={10}
            m={5}
          >
            <Flex h="50%" w="100%" justify="space-around" align="center">
              <Box>
                <Text fontSize="md" fontWeight="bold" ml={10}>
                  {item.name}
                </Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold" ml={10}>
                  {item.module}/{item.semester}/{item.group}/{item.on}
                </Text>
              </Box>
            </Flex>
            <Flex w="100%" justify="space-between" pl={10} pr={10}>
              <Text fontSize="lg">{item.message}</Text>
              <Box>
                <Button ml={2} colorScheme="teal">
                  Accept
                </Button>
                <Button ml={2} colorScheme="pink">
                  Reject
                </Button>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
