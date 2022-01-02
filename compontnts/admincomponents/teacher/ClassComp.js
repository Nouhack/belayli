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
import { CloseIcon } from "@chakra-ui/icons";

export default function ClassComp({ item, icc, seticc }) {
  return (
    <Flex bg="#DAF7A6" p={2} borderRadius={10} ml={2} mr={2} m={2}>
      <Box m={1} fontWeight="bold">
        {item.specialty}
      </Box>
      <Box m={1} fontWeight="bold">
        {item.semester}
      </Box>
      <Box m={1} fontWeight="bold">
        {item.groups.join(",")}
      </Box>
      <IconButton
        aria-label="Search database"
        size="sm"
        icon={<CloseIcon />}
        onClick={() => {
          const index = icc.indexOf(item);
          var newarr = [...icc];
          if (index > -1) {
            newarr.splice(index, 1);
          }
          seticc(newarr);
          console.log(index);
        }}
      />
    </Flex>
  );
}
