import React from "react";

import {
  Container,
  Table,
  Thead,
  Badge,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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

export default function ({ success, message }) {
  return (
    <Flex
      w="80%"
      maxH="100px"
      borderRadius="10px"
      h="100%"
      bg="white"
      boxShadow="lg"
      align="center"
      justify="center"
      mt="20px"
    >
      <Text fontSize="md" fontWeight="bold" color="gray">
        Recour : {message} .
      </Text>
      <Badge colorScheme={success ? "green" : "red"} ml="10px">
        {success ? "SUCCESS" : "FAILED"}
      </Badge>
    </Flex>
  );
}
