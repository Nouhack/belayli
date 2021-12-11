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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ImUser, ImUserTie } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { MdOutlineBook } from "react-icons/md";
import {
  DragHandleIcon,
  CalendarIcon,
  EditIcon,
  BellIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import Dashboard from "../compontnts/admincomponents/Dashboard";
import Calendar from "../compontnts/admincomponents/Calendar";
import Students from "../compontnts/admincomponents/Students";
import Teachers from "../compontnts/admincomponents/Teachers";
import IccMain from "../compontnts/admincomponents/icc/IccMain";
import Pv from "../compontnts/admincomponents/Pv";
//import moduleName from "module";

export default function Home() {
  const [screenIndex, setscreenIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <VStack minW="15%" h="100vh" spacing="0px">
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
              h="11.6vh"
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
              h="11.6vh"
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
              h="11.6vh"
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
                icon={<ImUser />}
                onClick={() => setscreenIndex(2)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                Students
              </Text>
            </Flex>
            <Flex
              h="11.6vh"
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
                icon={<ImUserTie />}
                onClick={() => setscreenIndex(3)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                Teachers
              </Text>
            </Flex>
            <Flex
              h="11.6vh"
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
                icon={<CgNotes />}
                onClick={() => setscreenIndex(4)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                ICC
              </Text>
            </Flex>
            <Flex
              h="11.6vh"
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
                icon={<MdOutlineBook />}
                onClick={() => setscreenIndex(5)}
              />
              <Text fontSize="md" color="#93a2b8" fontWeight="bold" mt="10px">
                PVs
              </Text>
            </Flex>
            <Center h="15vh" w="100%">
              <Button
                leftIcon={<ArrowBackIcon />}
                bg="transparent"
                fontWeight="bold"
                color="#637a98"
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
            <Students />
          ) : screenIndex == 3 ? (
            <Teachers />
          ) : screenIndex == 4 ? (
            <IccMain />
          ) : (
            <Pv />
          )}
        </Stack>
      </Container>
    </div>
  );
}
// calandar , delib . recour result
