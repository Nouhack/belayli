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

import AppealComponent from "./subcompontnts/AppealComponent";
export default function Appeals() {
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      direction="column"
      align="center"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
      overflowY="auto"
    >
      <AppealComponent success={true} message="ma note est 13 pas 9 et mrc" />
      <AppealComponent success={true} message="ma note est 13 pas 9 et mrc" />
      <AppealComponent success={true} message="j'eu 15 en examain" />
      <AppealComponent
        success={false}
        message="une erreur concernant la note de algo"
      />
      <AppealComponent success={true} message="ma note est 13 pas 9 et mrc" />
      <AppealComponent
        success={false}
        message="erreur de la moyenne generale"
      />
    </Flex>
  );
}
