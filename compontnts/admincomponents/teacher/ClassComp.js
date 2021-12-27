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
export default function ClassComp({ spec, sem, groups }) {
  return (
    <Flex bg="red" direction="row">
      <Box bg="green">{spec}</Box>
      <Box bg="blue">{sem}</Box>
      <Box bg="pink">{groups}</Box>
      <Box></Box>
    </Flex>
  );
}
