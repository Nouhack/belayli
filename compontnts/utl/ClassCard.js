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
export default function ClassCard({
  item,
  handler,
  selectedspechandler,
  selectedsemehandler,
}) {
  return (
    <Flex
      minH="100px"
      justify="space-around"
      mt={5}
      mb={5}
      bg="yellow"
      w="80%"
      align="center"
      borderRadius={10}
      color="white"
      background="#00c9ff"
      background="-webkit-linear-gradient(to right, #00c9ff, #92fe9d); /* Chrome 10-25, Safari 5.1-6 */"
      background="linear-gradient(to right, #00c9ff, #92fe9d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
      onClick={() => {
        handler(true);
        console.log(item);
        selectedspechandler(item.specialty);
        selectedsemehandler(item.semester);
      }}
    >
      <Box fontWeight="bold" fontSize={20}>
        {item.specialty}
      </Box>
      <Box fontWeight="bold" fontSize={20}>
        {item.semester}
      </Box>
      <Box fontWeight="bold" fontSize={20}>
        {item.group}
      </Box>
    </Flex>
  );
}
