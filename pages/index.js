import { useSession, signIn, signOut } from "next-auth/react";

import { Button, Spinner, Text, Flex, Center, Image } from "@chakra-ui/react";
import Student from "../screens/student";
import Teacher from "../screens/prof";
import Admin from "../screens/admin";
import Typist from "react-typist";
import styles from "../styles/Typist.module.css";
import axios from "axios";
import { useEffect } from "react";
export default function Component() {
  const { data: session, status } = useSession();
  console.log("00000000000000000000000");
  console.log(status);
  console.log("00000000000000000000000");

  if (status === "loading") {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red"
          size="xl"
        />
      </Center>
    );
  }
  if (status === "authenticated") {
    if (session.user.role === "student") {
      return <Admin />;
    }

    if (session.user.role === "teacher") {
      return <Teacher />;
    }

    if (session.user.role === "admin") {
      return <Admin />;
    }
  }

  return (
    <Flex w="100%" h="100vh">
      <Flex w="50%" bg="red" h="100%" direction="column">
        <Center h="50%" w="100%" bg="#F1F6FC">
          <Image
            src="/1.PNG"
            alt="Dan Abramov"
            w="80%"
            h="80%"
            transform=" rotate(15deg)"
          />
        </Center>
        <Center h="50%" w="100%" bg="#F1F6FC">
          <Image src="/2.PNG" alt="Dan Abramov" w="70%" h="70%" />
        </Center>
      </Flex>
      <Flex
        w="50%"
        align="center"
        justify="center"
        direction="column"
        bg="#F1F6FC"
        h="100%"
      >
        <Text fontSize="2xl" fontWeight="bold" letterSpacing={10} mb={10}>
          Welcome to AppName
        </Text>

        <Text fontSize="xl" letterSpacing={10} mb={10}>
          <Typist className={(styles.Typist, styles.Cursor)}>
            login to get access
          </Typist>
        </Text>
        <Button
          w="50%"
          variant="outline"
          colorScheme="blue"
          onClick={() => signIn()}
        >
          LogIn
        </Button>
      </Flex>
    </Flex>
  );
}
/*

        <button onClick={() => signOut()}>Sign out</button>
      <button onClick={() => signIn()}>Sign in</button>
      <Text fontSize="2xl">
        <Typist className={(styles.Typist, styles.Cursor)}>
          Animatsdflkjsdflkj sdkfjlkjlsdkjf sdkjfe this text.
        </Typist>
      </Text>

*/
