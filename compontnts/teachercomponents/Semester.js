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
import Groups from "./Groups";
export default function Specialty() {
  const [showgroups, setshowgroups] = useState(false);
  const [years, setyears] = useState(["S1", "S3", "S4"]);
  return (
    <>
      {showgroups ? (
        <Groups />
      ) : (
        <>
          {years.map((item, index) => {
            return (
              <Center
                key={index}
                w="42%"
                h={200}
                bg={"white"}
                boxShadow="xl"
                border="1px solid gray"
                color="black"
                borderRadius={10}
                m={3}
                onClick={() => {
                  setshowgroups(true);
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
    </>
  );
}
