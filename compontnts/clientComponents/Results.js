import React, { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Stack,
  HStack,
  useDisclosure,
  Avatar,
  Center,
  IconButton,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Results() {
  const [moduleappeal, setmoduleappeal] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("bottom");
  const modules = [
    { module: "math", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "algo", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "french", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "english", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "physics", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "algebra", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    { module: "sgbd", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
    {
      module: "structure machine",
      "test 1": 12,
      "test 2": 10,
      exam: 11,
      moyenne: 10.22,
    },
    {
      module: "probability",
      "test 1": 12,
      "test 2": 10,
      exam: 11,
      moyenne: 10.22,
    },
    { module: "dev web", "test 1": 12, "test 2": 10, exam: 11, moyenne: 10.22 },
  ];
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      direction="column"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <Table size="sm" h="100%">
        <Thead>
          <Tr>
            <Th>Module</Th>
            <Th>Test 1</Th>
            <Th>Test 2</Th>
            <Th>Examain</Th>
            <Th>Moyenne</Th>
            <Th>Recour</Th>
          </Tr>
        </Thead>
        <Tbody>
          {modules.map((item, index) => {
            return (
              <Tr color="gray" fontWeight="bold">
                <Td>{item.module}</Td>
                <Td>{item["test 1"]}</Td>
                <Td>{item["test 2"]}</Td>
                <Td>{item.exam}</Td>
                <Td>{item.moyenne}</Td>
                <Td>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => {
                      onOpen();
                      setmoduleappeal(item.module);
                    }}
                  >
                    demande
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Faire Un Recour pour la verification des notes du {moduleappeal}
          </DrawerHeader>
          <DrawerBody>
            <Flex
              w="100%"
              h="100px"
              direction="row"
              align="center"
              justify="center"
            >
              <Input
                placeholder="Fill here your appeal"
                onInput={(e) => {
                  e.target.value = e.target.value.slice(0, 80);
                }}
                size="md"
                w="60%"
              />
              <Button ml="10px">send</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
