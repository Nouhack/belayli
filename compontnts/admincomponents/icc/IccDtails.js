import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
import { useDispatch, useSelector } from "react-redux";
import {
  DragHandleIcon,
  CalendarIcon,
  EditIcon,
  BellIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

const animatedComponents = makeAnimated();

const options = [
  { value: "francais", label: "francais" },
  { value: "englais", label: "englais" },
  { value: "math", label: "math" },
  { value: "algebra", label: "algebra" },
  { value: "algorithme", label: "algorithme" },
  { value: "sgbd", label: "sgbd" },
  { value: "structuremachide", label: "structure machine" },
  { value: "javaEE", label: "java EE" },
  { value: "statistique", label: "statistique" },
  { value: "probabilite", label: "probabilite" },
];

const groupsLabel = ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"];

export default function Dashboard() {
  const [spec, setspec] = useState(["ESIL", "MI", "SI"]);

  const [semestersselected, setsemestersselected] = useState([]);
  const [groupsselected, setgroupsselected] = useState([]);
  const [unitiesselected, setunitiesselected] = useState([]);

  const [selectedmaster, setselectedmaster] = useState(false);
  const [fondunitlist, setfondunitlist] = useState(true);
  const [methunitlist, setmethunitlist] = useState(true);
  const [decovunitlist, setdecovunitlist] = useState(true);
  const [transunitlist, settransunitlist] = useState(true);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const special = useSelector((state) => state.icc);
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
      minH="100vh"
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
          <p>{special.name}</p>
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
          <RadioGroup defaultValue="1">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="1"
                onChange={(e) => {
                  setselectedmaster(false);
                }}
              >
                Licence
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                onChange={(e) => {
                  setselectedmaster(true);
                }}
              >
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
            <Checkbox
              colorScheme="red"
              value="S1"
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S1
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value="S2"
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S2
            </Checkbox>
            <Checkbox
              colorScheme="red"
              value="S3"
              isDisabled={selectedmaster}
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S3
            </Checkbox>
            <Checkbox
              colorScheme="green"
              value="S4"
              isDisabled={selectedmaster}
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S4
            </Checkbox>
            <Checkbox
              isDisabled={selectedmaster}
              value="S5"
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S5
            </Checkbox>
            <Checkbox
              colorScheme="red"
              value="S6"
              isDisabled={selectedmaster}
              onChange={(e) => {
                if (e.target.checked) {
                  setsemestersselected((val) => [...val, e.target.value]);
                } else {
                  const index = semestersselected.indexOf(e.target.value);
                  if (index > -1) {
                    var newArray = semestersselected;
                    newArray.splice(index, 1);
                    setsemestersselected(newArray);
                  }
                }
              }}
            >
              S6
            </Checkbox>
          </Stack>
        </Center>
      </Flex>
      <Flex w="100%" h="100%">
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
          <Center
            justifyContent="space-around"
            h="100%"
            direction="row"
            w="100%"
          >
            <Flex direction="column" maxW="22%" justify="space-around" h="100%">
              <Checkbox
                colorScheme="red"
                value="unite Fondamental"
                onChange={(e) => {
                  setfondunitlist(!e.target.checked);
                  if (e.target.checked) {
                    setunitiesselected((val) => [...val, e.target.value]);
                  } else {
                    const index = unitiesselected.indexOf(e.target.value);
                    if (index > -1) {
                      var newArray = unitiesselected;
                      newArray.splice(index, 1);
                      setunitiesselected(newArray);
                    }
                  }
                }}
              >
                Unite Fondamentale
              </Checkbox>
              <Select
                isDisabled={fondunitlist}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
            </Flex>
            <Flex direction="column" justify="space-around" h="100%" maxW="22%">
              <Checkbox
                colorScheme="green"
                value="unite Methodologique"
                onChange={(e) => {
                  setmethunitlist(!e.target.checked);
                  if (e.target.checked) {
                    setunitiesselected((val) => [...val, e.target.value]);
                  } else {
                    const index = unitiesselected.indexOf(e.target.value);
                    if (index > -1) {
                      var newArray = unitiesselected;
                      newArray.splice(index, 1);
                      setunitiesselected(newArray);
                    }
                  }
                }}
              >
                Unite Methodologique
              </Checkbox>
              <Select
                isDisabled={methunitlist}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
            </Flex>
            <Flex direction="column" justify="space-around" h="100%" maxW="22%">
              <Checkbox
                colorScheme="red"
                value="unite Decouverte 1"
                onChange={(e) => {
                  setdecovunitlist(!e.target.checked);
                  if (e.target.checked) {
                    setunitiesselected((val) => [...val, e.target.value]);
                  } else {
                    const index = unitiesselected.indexOf(e.target.value);
                    if (index > -1) {
                      var newArray = unitiesselected;
                      newArray.splice(index, 1);
                      setunitiesselected(newArray);
                    }
                  }
                }}
              >
                Unite Decouverte 1
              </Checkbox>
              <Select
                isDisabled={decovunitlist}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
            </Flex>
            <Flex direction="column" justify="space-around" h="100%" maxW="22%">
              <Checkbox
                colorScheme="green"
                value="unite Traversale 1"
                onChange={(e) => {
                  settransunitlist(!e.target.checked);
                  if (e.target.checked) {
                    setunitiesselected((val) => [...val, e.target.value]);
                  } else {
                    const index = unitiesselected.indexOf(e.target.value);
                    if (index > -1) {
                      var newArray = unitiesselected;
                      newArray.splice(index, 1);
                      setunitiesselected(newArray);
                    }
                  }
                }}
              >
                Unite Transversale 1
              </Checkbox>
              <Select
                isDisabled={transunitlist}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
              />
            </Flex>
          </Center>
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
            {groupsLabel.map((item, index) => {
              return (
                <Checkbox
                  colorScheme="red"
                  value={item}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setgroupsselected((val) => [...val, e.target.value]);
                    } else {
                      const index = groupsselected.indexOf(e.target.value);
                      if (index > -1) {
                        var newArray = groupsselected;
                        newArray.splice(index, 1);
                        setgroupsselected(newArray);
                      }
                    }
                  }}
                >
                  {item}
                </Checkbox>
              );
            })}
          </Stack>
        </Center>
      </Flex>

      <Center w="100%" minH="16.6%">
        <Button
          leftIcon={<AddIcon />}
          w="50%"
          variant="outline"
          colorScheme="blue"
          onClick={() =>
            dispatch({
              type: "ADD_ICC",
            })
          }
        >
          {" "}
          Save
        </Button>
      </Center>
    </Flex>
  );
}
