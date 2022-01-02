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
export default function ModuleCard({ name, pvhandler }) {
  return (
    <Flex
      minH="200px"
      justify="space-around"
      mt={5}
      mb={5}
      ml={1}
      mr={1}
      bg="yellow"
      w="40%"
      align="center"
      borderRadius={10}
      color="white"
      background="#7b4397"
      background=" -webkit-linear-gradient(to right, #7b4397, #dc2430); /* Chrome 10-25, Safari 5.1-6 */"
      background="linear-gradient(to right, #7b4397, #dc2430); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
      onClick={() => {
        pvhandler(true);
      }}
    >
      <Box fontWeight="bold" fontSize={20}>
        {name}
      </Box>
    </Flex>
  );
}
