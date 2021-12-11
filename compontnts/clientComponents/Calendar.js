import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
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

const localizer = momentLocalizer(moment);

export default function Calendars() {
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "exams",
    },
    {
      start: moment().add(10, "days").toDate(),
      end: moment().add(14, "days").toDate(),
      title: "tests",
    },
  ];
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      direction="column"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%", width: "100%" }}
      />
    </Flex>
  );
}
