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

const verifyExistsHandler = (params, semester) => {
  if (
    params.filter((item, index) => {
      return item.name === semester;
    }).length > 0
  ) {
    return true;
  } else {
    return false;
  }
};

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

export default function Unitity({
  sem,
  unity,
  setunit,
  challenge,
  setchallenge,
}) {
  const [spec, setspec] = useState(["ESIL", "MI", "SI"]);
  const [unitselected, setunitselected] = useState([]);
  const [semestersselected, setsemestersselected] = useState([]);
  const [groupsselected, setgroupsselected] = useState([]);
  const [unitiesselected, setunitiesselected] = useState([]);
  const [unitnames, setunitnames] = useState([
    "Unite Fondamental",
    "Unite Methodologique",
    "Unite Decouverte 1",
    "Unite Transversale 1",
  ]);

  const [selectedmaster, setselectedmaster] = useState(false);
  const [fondunitlist, setfondunitlist] = useState(true);
  const [methunitlist, setmethunitlist] = useState(true);
  const [decovunitlist, setdecovunitlist] = useState(true);
  const [transunitlist, settransunitlist] = useState(true);
  return (
    <Flex w="100%" h="100%" mt={10}>
      <Center bg="white" w="10%">
        <Text
          transform="rotate(270deg)"
          color="white"
          fontWeight="bold"
          fontSize="md"
          bg="#1479ff"
          p={2}
        >
          Unites {sem}
        </Text>
      </Center>
      <Center w="100%">
        <Center justifyContent="space-around" h="100%" direction="row" w="100%">
          {unitnames.map((item, index) => {
            return (
              <Flex
                key={index}
                direction="column"
                maxW="22%"
                justify="space-around"
                h="100%"
              >
                <Checkbox
                  colorScheme="red"
                  value={item}
                  onChange={(e) => {
                    if (item === "Unite Fondamental") {
                      setfondunitlist(!e.target.checked);
                    }
                    if (item === "Unite Methodologique") {
                      setmethunitlist(!e.target.checked);
                    }
                    if (item === "Unite Decouverte 1") {
                      setdecovunitlist(!e.target.checked);
                    }
                    if (item === "Unite Transversale 1") {
                      settransunitlist(!e.target.checked);
                    }
                    if (e.target.checked) {
                      setunit((val) => [...val, e.target.value]);
                      setunitselected((val) => [...val, e.target.value]);
                    } else {
                      const index = unitselected.indexOf(e.target.value);
                      if (index > -1) {
                        var newArray = unitselected;
                        newArray.splice(index, 1);
                        setunit(newArray);
                        setunitselected(newArray);
                      }
                    }
                  }}
                >
                  {item}
                </Checkbox>
                <Select
                  isDisabled={
                    item === "Unite Fondamental"
                      ? fondunitlist
                      : item === "Unite Methodologique"
                      ? methunitlist
                      : item === "Unite Decouverte 1"
                      ? decovunitlist
                      : transunitlist
                  }
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={options}
                  onChange={(e) => {
                    if (e.length === 0) {
                      console.log("delete");
                    } else {
                      if (verifyExistsHandler(challenge, sem)) {
                        // if exists ALTER IT
                        // delete the getted object
                        const newArray = [...challenge];
                        newArray.splice(
                          challenge.findIndex(
                            (element) => element.name === sem
                          ),
                          1
                        );
                        setchallenge(newArray);

                        // ADD the modified object

                        setchallenge((prev) => [
                          ...prev,
                          {
                            name: sem,
                            unities: unitselected,
                          },
                        ]);
                      } else {
                        // if doesnt exist CREATE IT
                        setchallenge((prev) => [
                          ...prev,
                          {
                            name: sem,
                            unities: unitselected,
                          },
                        ]);
                      }
                    }
                  }}
                />
              </Flex>
            );
          })}
        </Center>
      </Center>
    </Flex>
  );
}

/*

{
  name : 'S1',
  unities : [
    {
      name : 'unite fondamental',
      modules : []
    },
    ...
  ]
}

*/
