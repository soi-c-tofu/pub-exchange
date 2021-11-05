import { Coordinate } from "../../api/types";

export const calculateCoordinatesDistanceDifference = (
  first: Coordinate,
  second: Coordinate
): number => {
  const EarthRadius = 6371e3; // metres
  const firstLatitudeRadians = (first.latitude * Math.PI) / 180; // φ, λ in radians
  const secondLatitudeRadians = (second.latitude * Math.PI) / 180;
  const latitudeDeltaRadians =
    ((second.latitude - first.latitude) * Math.PI) / 180;
  const longitudeDeltaRadians =
    ((second.longitude - first.longitude) * Math.PI) / 180;

  const haversine =
    Math.sin(latitudeDeltaRadians / 2) * Math.sin(latitudeDeltaRadians / 2) +
    Math.cos(firstLatitudeRadians) *
      Math.cos(secondLatitudeRadians) *
      Math.sin(longitudeDeltaRadians / 2) *
      Math.sin(longitudeDeltaRadians / 2);
  const c = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  const d = EarthRadius * c; // in metres

  return d;
};
