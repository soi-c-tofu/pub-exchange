import { Text } from "@chakra-ui/layout";
import React, { FC, useContext, useEffect, useState } from "react";
import { Coordinate, PubLocation } from "../../api/types";
import { ChooseLocation } from "../ChooseLocation/ChooseLocation";
import { Login } from "../Login/Login";
import { loginContext } from "../Login/LoginContext";
import { PubMenu } from "../PubMenu/PubMenu";

export const Landing: FC = () => {
  const [userCoordinate, setLocation] = useState<Coordinate | undefined>(
    undefined
  );

  const { token } = useContext(loginContext);

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

  if (token === undefined) {
    return <Login />;
  }

  if (userCoordinate === undefined) {
    return (
      <Text>
        Please refresh and allow Pub Exchange to know your current location
      </Text>
    );
  }

  return userAtThisPubLocation ? (
    <PubMenu setUserAtThisPubLocation={setUserAtThisPubLocation} />
  ) : (
    <ChooseLocation
      setUserAtThisPubLocation={setUserAtThisPubLocation}
      userCoordinate={userCoordinate}
    />
  );
};
