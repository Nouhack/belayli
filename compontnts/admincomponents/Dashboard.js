import React from "react";

import { PolarArea } from "react-chartjs-2";

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
import {
  DragHandleIcon,
  CalendarIcon,
  EditIcon,
  BellIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

export default function Dashboard() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Flex
      w="85%"
      h="100vh"
      bg="#f3f8ff"
      p="20px"
      direction="column"
      justify="space-around"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <HStack w="100%" h="45%" spacing={5}>
        <Flex
          w="60%"
          h="100%"
          bg="white"
          direction="row"
          boxShadow="lg"
          align="center"
          borderRadius={20}
        >
          <VStack h="100%" align="start" justify="center" p={7} w="50%">
            <Text fontSize="xl" color="#38557c" fontWeight="bold" mt="10px">
              Hello , Admin !
            </Text>
            <Text fontSize="sm" color="#5a7393" fontWeight="semibold" mt="10px">
              Now you can controle everything about students and teachers and
              check and print the note PV
            </Text>
            <Text fontSize="sm" color="#5a7393" pt="20px" fontWeight="bold">
              Have a nice day !
            </Text>
            <Box pt="20px">
              <Button bg="#1479ff" pr="30px" pl="30px" color="white">
                Check the PV
              </Button>
            </Box>
          </VStack>
          <Box h="100%" w="50%">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#f1f6fd"
                d="M37.4,-62.5C43.5,-61.2,40,-41.2,43.9,-27.6C47.9,-14.1,59.2,-7,66.5,4.2C73.7,15.4,76.8,30.8,65.7,31.8C54.5,32.9,29.1,19.6,15.7,12.3C2.4,5,1.2,3.6,-7.6,16.8C-16.4,30,-32.8,57.6,-44.6,64C-56.4,70.4,-63.5,55.6,-61.8,41.4C-60.1,27.2,-49.5,13.6,-44.6,2.9C-39.7,-7.9,-40.4,-15.8,-38,-22.9C-35.6,-30,-30.1,-36.4,-23.3,-37.2C-16.4,-38.1,-8.2,-33.5,3.7,-40C15.6,-46.4,31.3,-63.9,37.4,-62.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </Box>
        </Flex>
        <Flex
          justify="center"
          p={7}
          w="40%"
          h="100%"
          bg="white"
          boxShadow="lg"
          borderRadius={20}
          flexWrap="wrap"
        >
          <Text fontSize="xl" color="#38557c" fontWeight="bold" mt="10px">
            {monthNames[new Date().getMonth()]}, {new Date().getFullYear()}
          </Text>
          <Box>
            {[
              ...Array(
                new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + 1,
                  0
                ).getDate()
              ),
            ].map((item, index) => {
              return (
                <Button
                  key={index}
                  size="sm"
                  borderRadius={10}
                  border={
                    index % 3 == 0 ? "2px solid #57a0ff" : "2px solid #f2f5f9"
                  }
                  color="white"
                  bg={
                    index == new Date().getDate() - 1
                      ? "#1479ff"
                      : "transparent"
                  }
                  m={1.5}
                >
                  {index == new Date().getDate() - 1 && new Date().getDate()}
                </Button>
              );
            })}
          </Box>
        </Flex>
      </HStack>

      <HStack w="100%" h="45%" spacing={5}>
        <Flex
          justify="center"
          p={7}
          w="40%"
          h="100%"
          bg="white"
          boxShadow="lg"
          borderRadius={20}
          flexWrap="wrap"
        >
          <Text fontSize="xl" color="#38557c" fontWeight="bold">
            Add Teacher
          </Text>
          <img src="/teacher.svg" alt="An SVG of an eye" />
        </Flex>
        <Flex
          w="60%"
          h="100%"
          bg="white"
          direction="row"
          boxShadow="lg"
          align="center"
          borderRadius={20}
        >
          <VStack h="100%" align="center" justify="center" p={7} w="60%">
            <Text fontSize="xl" color="#38557c" fontWeight="bold">
              Add Student
            </Text>
            <img src="/student.svg" alt="An SVG of an eye" />
          </VStack>
          <Box h="100%" w="40%">
            <svg
              style={{
                width: "100%",
                height: "100%",
              }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#f1f6fd"
                d="M37.4,-62.5C43.5,-61.2,40,-41.2,43.9,-27.6C47.9,-14.1,59.2,-7,66.5,4.2C73.7,15.4,76.8,30.8,65.7,31.8C54.5,32.9,29.1,19.6,15.7,12.3C2.4,5,1.2,3.6,-7.6,16.8C-16.4,30,-32.8,57.6,-44.6,64C-56.4,70.4,-63.5,55.6,-61.8,41.4C-60.1,27.2,-49.5,13.6,-44.6,2.9C-39.7,-7.9,-40.4,-15.8,-38,-22.9C-35.6,-30,-30.1,-36.4,-23.3,-37.2C-16.4,-38.1,-8.2,-33.5,3.7,-40C15.6,-46.4,31.3,-63.9,37.4,-62.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
}
