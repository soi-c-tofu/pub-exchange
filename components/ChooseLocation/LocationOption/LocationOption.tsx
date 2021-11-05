import { Box, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { PubLocation } from "../../../api/types";

export interface LocationOptionProps {
  pubLocation: PubLocation;
  onClick: (pubLocation: PubLocation) => void;
}

export const LocationOption: FC<LocationOptionProps> = ({
  pubLocation,
  onClick,
}) => {
  return (
    <Box
      onClick={() => {
        onClick(pubLocation);
      }}
      bg="tomato"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="2"
      fontWeight="semibold"
    >
      <Text>{pubLocation.addressLine1}</Text>
      {pubLocation.addressLine2 && <Text>{pubLocation.addressLine2}</Text>}
      <Text>{pubLocation.city}</Text>
      <Text>{pubLocation.postcode}</Text>
      <Text>{pubLocation.distance} meters away</Text>
    </Box>
  );
};
