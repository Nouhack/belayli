import React, { useState, useEffect } from "react";

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
import Semester from "./Semester";
import axios from "axios";

export default function Specialty({ id }) {
  const [specialtyList, setspecialtyList] = useState([]);
  const [choosenspec, setchoosenspec] = useState("");
  useEffect(() => {
    axios
      .get("/api/class", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        setspecialtyList(res.data.class);
      });
  }, []);
  const [showSemester, setshowSemester] = useState(false);
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      flexWrap="wrap"
      justify="center"
      align="center"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
      overflowY="auto"
    >
      {showSemester ? (
        <Semester
          classicc={specialtyList.filter(
            (item) => item.specialty == choosenspec
          )}
        />
      ) : (
        <>
          {specialtyList.map((item, index) => {
            return (
              <Center
                key={index}
                w="42%"
                h={200}
                borderRadius={10}
                bg={"white"}
                boxShadow="xl"
                border="1px solid gray"
                color="black"
                m={3}
                onClick={() => {
                  setchoosenspec(item.specialty);
                  setshowSemester(true);
                  console.log(
                    specialtyList.filter(
                      (item2) => item2.specialty == item.specialty
                    )
                  );
                }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {item.specialty}
                </Text>
              </Center>
            );
          })}
        </>
      )}
    </Flex>
  );
}
//
/*

                  "#" +
                  (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)

*/
