import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { useQuery } from "react-query";
import { Coordinate, PubLocation } from "../../api/types";
import { LocationOption } from "./LocationOption/LocationOption";
import { FindPub } from "../FindPub/FindPub";

export interface ChooseLocationProps {
  setUserAtThisPubLocation: (pubLocation: PubLocation) => void;
  userCoordinate: Coordinate;
}

export const ChooseLocation: FC<ChooseLocationProps> = ({
  setUserAtThisPubLocation,
  userCoordinate,
}) => {
  const fetchPubLocations = async () => {
    const res = await fetch("/api/pub", {
      method: "POST",
      body: JSON.stringify(userCoordinate),
    });

    return res.json();
  };

  const { isLoading, error, data } = useQuery<PubLocation[]>(
    "pubLocations",
    fetchPubLocations
  );

  if (isLoading) return <Box>Loading...</Box>;

  if (error) return <Box>An error has occurred: ${error}</Box>;

  return (
    <VStack align="stretch">
      <FindPub userCoordinate={userCoordinate} />
      <SimpleGrid columns={[1, 2, 2, 4]} spacingX="40px" spacingY="20px">
        {data.map((pubLocation) => {
          return (
            <LocationOption
              key={pubLocation.postcode}
              onClick={setUserAtThisPubLocation}
              pubLocation={pubLocation}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};
