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
import Groups from "./Groups";
export default function Modules({ classicc, classDetail }) {
  useEffect(() => {
    console.log(classicc[0].modules);
  }, []);
  const [showuserslist, setshowuserslist] = useState(false);
  const [showgroups, setshowgroups] = useState(false);
  const [choosenmodule, setchoosenmodule] = useState("");
  const [groups, setgroups] = useState(["G2", "G3"]);
  return (
    <>
      {showgroups ? (
        <Groups
          classicc={classicc}
          module={choosenmodule}
          classDetail={classDetail}
        />
      ) : (
        <>
          {classicc[0].modules.map((item, index) => {
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
                  setshowgroups(true);
                  setchoosenmodule(item);
                  console.log(item);
                }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {item}
                </Text>
              </Center>
            );
          })}
        </>
      )}
    </>
  );
}

//admin use cases
/*
add users
add teachers
add specialty
add groups


*/
