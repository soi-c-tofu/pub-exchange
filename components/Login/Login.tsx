import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Heading, VStack } from "@chakra-ui/layout";
import React, { FC } from "react";

export const Login: FC = () => {
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
    </VStack>
  );
};
