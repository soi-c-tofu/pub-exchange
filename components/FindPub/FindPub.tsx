import { FC, useState } from "react";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import { Coordinate } from "../../api/types";

export interface FindPubProps {
  userCoordinate: Coordinate;
}

export const FindPub: FC<FindPubProps> = ({ userCoordinate }) => {
  const [libraries] = useState<Libraries>(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <>Map is loading...</>;
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "50vh" }}
        zoom={8}
        center={{
          lat: userCoordinate.latitude,
          lng: userCoordinate.longitude,
        }}
      ></GoogleMap>
    </>
  );
};
