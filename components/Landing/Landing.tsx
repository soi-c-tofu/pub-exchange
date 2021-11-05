import { Text } from "@chakra-ui/layout";
import React, { FC, useEffect, useState } from "react";
import { Coordinate, PubLocation } from "../../api/types";
import { ChooseLocation } from "../ChooseLocation/ChooseLocation";
import { PubMenu } from "../PubMenu/PubMenu";

export const Landing: FC = () => {
  const [userCoordinate, setLocation] = useState<Coordinate | undefined>(
    undefined
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation((location) => ({
          ...location,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      });
    }
  }, []);

  const [userAtThisPubLocation, setUserAtThisPubLocation] = useState<
    PubLocation | undefined
  >();

  if (userCoordinate === undefined) {
    return (
      <Text>
        Please refresh and allow Pub Exchange to know your current location
      </Text>
    );
  }

  return userAtThisPubLocation ? (
    <PubMenu
      // userAtThisPubLocation={userAtThisPubLocation}
      setUserAtThisPubLocation={setUserAtThisPubLocation}
    />
  ) : (
    <ChooseLocation
      setUserAtThisPubLocation={setUserAtThisPubLocation}
      userCoordinate={userCoordinate}
    />
  );
};
