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
import StudentTable from "./Studenttable";
export default function Groups() {
  const [showuserslist, setshowuserslist] = useState(false);
  const [groups, setgroups] = useState(["G2", "G3"]);
  return (
    <>
      {showuserslist ? (
        <StudentTable />
      ) : (
        <>
          {groups.map((item, index) => {
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
                  setshowuserslist(true);
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
