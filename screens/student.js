import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
import {
  DragHandleIcon,
  CalendarIcon,
  EditIcon,
  BellIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import Dashboard from "../compontnts/clientComponents/Dashboard";
import Calendar from "../compontnts/clientComponents/Calendar";
import Results from "../compontnts/clientComponents/Results";
import Appeals from "../compontnts/clientComponents/Appeals";
//import moduleName from "module";
export default function Home({ name, id }) {
  const [screenIndex, setscreenIndex] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "#f2f7fe",
      }}
    >
      <Container
        maxW="container.xl"
        borderRadius={50}
        boxShadow="xl"
        bg="white"
        p="0px"
        height="100vh"
      >
        <Stack direction={["column", "row"]} spacing="0px">
          <VStack w="15%" h="100vh" spacing="0px">
            <Flex
              h="15vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <Text fontSize="md" color="#1479ff" fontWeight="bold" mt="10px">
                App Name
              </Text>
            </Flex>
            <Flex
              h="14vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <IconButton
                boxShadow="Dark lg"
                borderRadius={12}
                color="white"
                size="md"
                bg="#1479ff"
                aria-label="Search database"
                icon={<DragHandleIcon />}
                onClick={() => setscreenIndex(0)}
              />
              <Text fontSize="md" color="#1479ff" fontWeight="bold" mt="10px">
                Dashboard
              </Text>
            </Flex>
            <Flex
              h="14vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <IconButton
                boxShadow="Dark lg"
                borderRadius={12}
                color="#1479ff"
                size="md"
                bg="#f3f8ff"
                aria-label="Search database"
                icon={<CalendarIcon />}
                onClick={() => setscreenIndex(1)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                Calendar
              </Text>
            </Flex>
            <Flex
              h="14vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <IconButton
                boxShadow="Dark lg"
                borderRadius={12}
                color="#1479ff"
                size="md"
                bg="#f3f8ff"
                aria-label="Search database"
                icon={<EditIcon />}
                onClick={() => setscreenIndex(2)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                Results
              </Text>
            </Flex>
            <Flex
              h="14vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <IconButton
                boxShadow="Dark lg"
                borderRadius={12}
                color="#1479ff"
                size="md"
                bg="#f3f8ff"
                aria-label="Search database"
                icon={<BellIcon />}
                onClick={() => setscreenIndex(3)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                appeal results
              </Text>
            </Flex>
            <Flex
              h="14vh"
              w="100%"
              align="center"
              justify="center"
              direction="column"
            >
              <Avatar name="Ryan Florence" src="https://picsum.photos/200" />

              <Text fontSize="md" color="#637a98" fontWeight="bold" mt="10px">
                {name}
              </Text>
            </Flex>
            <Center h="15vh" w="100%">
              <Button
                leftIcon={<ArrowBackIcon />}
                bg="transparent"
                fontWeight="bold"
                color="#637a98"
                onClick={() => signOut()}
                variant="solid"
              >
                Log Out
              </Button>
            </Center>
          </VStack>
          {screenIndex == 0 ? (
            <Dashboard />
          ) : screenIndex == 1 ? (
            <Calendar />
          ) : screenIndex == 2 ? (
            <Results id={id} />
          ) : (
            <Appeals />
          )}
        </Stack>
      </Container>
    </div>
  );
}
// calandar , delib . recour result
