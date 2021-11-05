import { Coordinate, PubLocation } from "../../../api/types";
import { calculateCoordinatesDistanceDifference } from "../../../components/ChooseLocation/LocationUtils";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "bad request" });
    return;
  }

  const coordinate: Coordinate = JSON.parse(req.body);

  const pubLocations: PubLocation[] = [
    {
      addressLine1: "The Downtrend pub",
      city: "Manchester",
      postcode: "M4 4HY",
      coordinate: {
        latitude: 53.488414,
        longitude: -2.231904,
      },
    },
    {
      addressLine1: "Alt-cohol house",
      city: "Manchester",
      postcode: "M4 4BQ",
      coordinate: {
        latitude: 53.487443,
        longitude: -2.235167,
      },
    },
    {
      addressLine1: "Beerchain inn",
      city: "Manchester",
      postcode: "M4 1HW",
      coordinate: {
        latitude: 53.484289,
        longitude: -2.236086,
      },
    },
    {
      addressLine1: "The exchange pub",
      city: "Manchester",
      postcode: "M1 2EQ",
      coordinate: {
        latitude: 53.481834,
        longitude: -2.231899,
      },
    },
    {
      addressLine1: "Pub and dump",
      city: "Manchester",
      postcode: "M4 6FQ",
      coordinate: {
        latitude: 53.483769,
        longitude: -2.224689,
      },
    },
  ];

  res.status(200).json(
    pubLocations
      .map((location) => {
        return {
          ...location,
          distance: calculateCoordinatesDistanceDifference(
            location.coordinate,
            coordinate
          ),
        };
      })
      .sort((a, b) => {
        return a.distance - b.distance;
      })
  );
}
