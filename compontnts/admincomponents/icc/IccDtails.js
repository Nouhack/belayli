import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { PolarArea } from "react-chartjs-2";
import { AddIcon } from "@chakra-ui/icons";
import Unity from "../../utl/Unitity";
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
import axios from "axios";
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

  const [challenge, setchallenge] = useState([]);
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
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
                  setsemestersselected((prev) =>
                    prev.filter((item, index) => item != e.target.value)
                  );
                }
              }}
            >
              S6
            </Checkbox>
          </Stack>
        </Center>
      </Flex>

      {semestersselected.length > 0 ? (
        semestersselected.map((item, index) => {
          return (
            <Unity
              challenge={challenge}
              setchallenge={setchallenge}
              sem={item}
              key={item}
              unity={unitiesselected}
              setunit={setunitiesselected}
            />
          );
        })
      ) : (
        <Center w="100%" h="100%">
          <Text fontSize="xl">No semesters were selected</Text>
        </Center>
      )}
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
          onClick={() => {
            axios
              .post("/api/initial", {
                data: challenge,
              })
              .then(function (response) {
                console.log("item added to the db");
              })
              .catch(function (error) {
                console.log(error);
              });
            dispatch({
              type: "ADD_ICC",
            });
          }}
        >
          {" "}
          Save
        </Button>
        <Button
          leftIcon={<AddIcon />}
          w="50%"
          variant="outline"
          colorScheme="blue"
          onClick={() => console.log(challenge)}
        >
          kiki
        </Button>
      </Center>
    </Flex>
  );
}
