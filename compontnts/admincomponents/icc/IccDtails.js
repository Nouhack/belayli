import React, { useState } from "react";

import { PolarArea } from "react-chartjs-2";
import { AddIcon } from "@chakra-ui/icons";

import {
  Container,
  Input,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  RadioGroup,
  Radio,
  Box,
  Badge,
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
  const [spec, setspec] = useState(["ESIL", "MI", "SI"]);
  const [mod, setmod] = useState([
    "Anglais 1",
    "Anglais 2",
    "math",
    "Analyse ",
    "Probabilités",
    "Topologie",
    "francais",
    "algorithme",
    "algebra",
    "structure machide",
    "sgbd",
  ]);
  return (
    <Flex
      w="85%"
      h="100vh"
      bg="white"
      p="20px"
      direction="column"
      justify="flex-start"
      overflowY="auto"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <Flex w="100%" minH="16.6%" direction="row">
        <Center bg="white" w="10%">
          <Text
            transform="rotate(270deg)"
            color="white"
            fontWeight="bold"
            fontSize="md"
            bg="#1479ff"
            p={2}
          >
            Specialty
          </Text>
        </Center>
        <Center w="100%">
          <Input w="50%" textAlign="center" placeholder="Specialty" />
        </Center>
      </Flex>
      <Flex w="100%" minH="16.6%">
        <Center bg="white" w="10%">
          <Text
            transform="rotate(270deg)"
            color="white"
            fontWeight="bold"
            fontSize="md"
            bg="#1479ff"
            p={2}
          >
            Cycle
          </Text>
        </Center>
        <Center w="100%">
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="1">
                Licence
              </Radio>
              <Radio colorScheme="green" value="2">
                Master
              </Radio>
            </Stack>
          </RadioGroup>
        </Center>
      </Flex>
      <Flex w="100%" minH="16.6%">
        <Center bg="white" w="10%">
          <Text
            transform="rotate(270deg)"
            color="white"
            fontWeight="bold"
            fontSize="md"
            bg="#1479ff"
            p={2}
          >
            Semester
          </Text>
        </Center>
        <Center w="100%">
          <Stack spacing={10} direction="row">
            <Checkbox colorScheme="red">S1</Checkbox>
            <Checkbox colorScheme="green">S2</Checkbox>
            <Checkbox colorScheme="red">S3</Checkbox>
            <Checkbox colorScheme="green">S4</Checkbox>
            <Checkbox>S5</Checkbox>
            <Checkbox colorScheme="red">S6</Checkbox>
          </Stack>
        </Center>
      </Flex>
      <Flex w="100%" minH="16.6%">
        <Center bg="white" w="10%">
          <Text
            transform="rotate(270deg)"
            color="white"
            fontWeight="bold"
            fontSize="md"
            bg="#1479ff"
            p={2}
          >
            Unites
          </Text>
        </Center>
        <Center w="100%">
          <Stack spacing={10} direction="row">
            <Menu closeOnSelect={false} boundary="scrollParent">
              <MenuButton as={Button} colorScheme="blue">
                Add
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuDivider />
                <MenuOptionGroup title="Modules" type="checkbox">
                  {mod.map((item, index) => {
                    return <MenuItemOption value={item}>{item}</MenuItemOption>;
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Checkbox colorScheme="red">Unite Fondamentale</Checkbox>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="blue">
                Add
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuDivider />
                <MenuOptionGroup title="Modules" type="checkbox">
                  {mod.map((item, index) => {
                    return <MenuItemOption value={item}>{item}</MenuItemOption>;
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Checkbox colorScheme="green">Unite Methodologique</Checkbox>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="blue">
                Add
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuDivider />
                <MenuOptionGroup title="Modules" type="checkbox">
                  {mod.map((item, index) => {
                    return <MenuItemOption value={item}>{item}</MenuItemOption>;
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Checkbox colorScheme="red">Unite Decouverte 1</Checkbox>
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="blue">
                Add
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuDivider />
                <MenuOptionGroup title="Modules" type="checkbox">
                  {mod.map((item, index) => {
                    return <MenuItemOption value={item}>{item}</MenuItemOption>;
                  })}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
            <Checkbox colorScheme="green">Unite Transversale 1</Checkbox>
          </Stack>
        </Center>
      </Flex>

      <Flex w="100%" minH="16.6%">
        <Center bg="white" w="10%">
          <Text
            transform="rotate(270deg)"
            color="white"
            fontWeight="bold"
            fontSize="md"
            p={2}
            bg="#1479ff"
          >
            Groups
          </Text>
        </Center>
        <Center w="100%">
          <Stack spacing={10} direction="row">
            <Checkbox colorScheme="red">G1</Checkbox>
            <Checkbox colorScheme="green">G2</Checkbox>
            <Checkbox colorScheme="red">G3</Checkbox>
            <Checkbox colorScheme="green">G4</Checkbox>
            <Checkbox>S5</Checkbox>
            <Checkbox colorScheme="red">G5</Checkbox>
            <Checkbox colorScheme="green">G6</Checkbox>
            <Checkbox colorScheme="green">G7</Checkbox>
            <Checkbox colorScheme="green">G8</Checkbox>
          </Stack>
        </Center>
      </Flex>

      <Center w="100%" minH="16.6%">
        <Button
          leftIcon={<AddIcon />}
          w="50%"
          variant="solid"
          bg="#1479ff"
          color="white"
        >
          {" "}
          Save
        </Button>
      </Center>
    </Flex>
  );
}
