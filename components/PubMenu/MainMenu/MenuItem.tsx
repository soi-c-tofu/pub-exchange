import { Box, HStack } from "@chakra-ui/layout";
import { Button, Image, VStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export interface MenuItemDisplayProps {
  name: string;
  price: number;
  description: string;
  onMinusClick: () => void;
  onAddClick: () => void;
  imageSrc?: string;
}

export const MenuItemDisplay: FC<MenuItemDisplayProps> = ({
  name,
  price,
  description,
  onMinusClick,
  onAddClick,
  imageSrc,
}) => {
  return (
    <HStack p={2} shadow="md">
      <VStack flexGrow={1} align="stretch">
        <HStack>
          <Text fontSize="lg" as="u">
            {name}
          </Text>
          <Text as="i">£{price}</Text>
        </HStack>
        <Box>{description}</Box>
        <HStack>
          <Button size="sm" onClick={onMinusClick}>
            -
          </Button>
          <Button size="sm" onClick={onAddClick}>
            +
          </Button>
        </HStack>
      </VStack>
      {imageSrc && (
        <Image borderRadius="full" boxSize="100px" src={imageSrc} alt={name} />
      )}
    </HStack>
  );
};
