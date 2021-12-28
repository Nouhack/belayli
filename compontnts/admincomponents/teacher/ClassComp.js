import React from "react";

import {
  Container,
  Checkbox,
  Box,
  Divider,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Stack,
  ButtonGroup,
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
  HStack,
  Avatar,
  Center,
  IconButton,
  Lorem,
  VStack,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Radio,
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
export default function ClassComp({ item }) {
  return (
    <Flex bg="red" direction="row" p={2} ml={2} mt={10} borderRadius={10}>
      <Box bg="green">{item.specialty}</Box>
      <Box bg="blue">{item.semester}</Box>
      <Box bg="pink">{item.groups}</Box>
      <Box>delete</Box>
    </Flex>
  );
}
