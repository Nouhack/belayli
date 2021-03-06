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
import Groups from "./Groups";
import Modules from "./Modules";
export default function Specialty({ classicc, classDetail }) {
  const [showgroups, setshowgroups] = useState(false);
  const [choosensemester, setchoosensemester] = useState("");
  const [classDetails, setclassDetail] = useState("");
  const [years, setyears] = useState(["S1", "S3", "S4"]);
  return (
    <>
      {showgroups ? (
        <Modules
          classicc={classicc.filter((item) => item.semester == choosensemester)}
          classDetail={classDetails}
        />
      ) : (
        <>
          {classicc.map((item, index) => {
            return (
              <Center
                key={index}
                w="42%"
                h={200}
                bg={"white"}
                boxShadow="xl"
                border="1px solid gray"
                color="black"
                borderRadius={10}
                m={3}
                onClick={() => {
                  setshowgroups(true);
                  setchoosensemester(item.semester);
                  setclassDetail({
                    specialty: item.specialty,
                    semester: item.semester,
                  });
                }}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {item.semester}
                </Text>
              </Center>
            );
          })}
        </>
      )}
    </>
  );
}
