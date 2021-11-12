import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Heading, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, { FC, useContext } from "react";
import { loginContext } from "./LoginContext";

export const Login: FC = () => {
  const { setToken, setEmail } = useContext(loginContext);

  return (
    <VStack align="stretch">
      <Heading>Login</Heading>
      <InputGroup>
        <InputLeftAddon>Email: </InputLeftAddon>
        <Input />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon>Password: </InputLeftAddon>
        <Input />
      </InputGroup>
      <Button
        onClick={() => {
          setToken("");
          setEmail("testuser@email.com");
        }}
      >
        Login
      </Button>
    </VStack>
  );
};
