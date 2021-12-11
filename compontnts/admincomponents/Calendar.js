import React, { useState } from "react";
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
  const [events, setevents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "examain",
    },
    {
      start: moment().add(10, "days").toDate(),
      end: moment().add(14, "days").toDate(),
      title: "test 1",
    },
  ]);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      setevents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
  };

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
        selectable
        endAccessor="end"
        onSelectEvent={(event) =>
          alert(moment(event.start).format("MMMM Do YYYY, h:mm:ss a"))
        }
        onSelectSlot={handleSelect}
        style={{ height: "100%", width: "100%" }}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: "green",
            color: "black",
            borderRadius: "10px",
            border: "none",
          };

          if (event.title === "test 1") {
            newStyle.backgroundColor = "red";
          }

          if (event.title === "test 2") {
            newStyle.backgroundColor = "blue";
          }

          if (event.title === "examain") {
            newStyle.backgroundColor = "pink";
          }

          if (event.title === "recour") {
            newStyle.backgroundColor = "yellow";
          }
          return {
            className: "",
            style: newStyle,
          };
        }}
      />
    </Flex>
  );
}
