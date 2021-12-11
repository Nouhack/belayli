import React from "react";

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
export default function appealscomponent() {
  return (
    <Flex w="100%" h="100%" direction="column" align="center" justify="center">
      <img
        style={{
          height: "40%",
        }}
        src="/appeals.svg"
        alt="An SVG of an eye"
      />

      <Text fontSize="4xl" fontWeight="bold">
        {" "}
        3 appeals
      </Text>
      <Button mt={10} bg="#1479ff" color="white" size="lg">
        Check
      </Button>
    </Flex>
  );
}
