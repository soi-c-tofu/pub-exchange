import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import { Landing } from "../components/Landing/Landing";
import { LoginProvider } from "../components/Login/LoginContext";
import { PubMenuProvider } from "../components/PubMenu/PubMenuContext";

export default function Home() {
  return (
    <ChakraProvider>
      <LoginProvider>
        <PubMenuProvider>
          <Container p={4} maxW="container.lg">
            <Landing></Landing>
          </Container>
        </PubMenuProvider>
      </LoginProvider>
    </ChakraProvider>
  );
}
