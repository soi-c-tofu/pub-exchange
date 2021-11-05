// import { HamburgerIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  Container,
  // HStack,
  // IconButton,
  // Menu,
  // MenuButton,
  // MenuList,
  // VStack,
} from "@chakra-ui/react";
import React from "react";
import { Landing } from "../components/Landing/Landing";

export default function Home() {
  return (
    <ChakraProvider>
      <Container p={4} maxW="container.lg">
        <Landing></Landing>
      </Container>
    </ChakraProvider>
  );
}
