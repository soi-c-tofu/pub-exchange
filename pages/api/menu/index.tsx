import { Menu } from "../../../api/types";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(400).json({ message: "bad request" });
    return;
  }

  const menu: Menu = {
    breakfasts: [
      {
        id: 1,
        name: "English breakfast",
        description: "2 Eggs, 2 Sausages, 2 Bacons, 2 Hashbrowns and beans",
        price: 6,
        imageSrc:
          "https://s3-eu-west-1.amazonaws.com/s3-gousto-production-media/cms/mood-image/3301_2-All-Day-English-Breakfast-With-Chips--Beans-9361-1616494956723.jpg",
      },
      {
        id: 2,
        name: "Veg breakfast",
        description: "2 Eggs, 2 Veg Sausages, 2 Hashbrowns and beans",
        price: 5,
      },
      {
        id: 3,
        name: "Breakfast bap",
        description: "Egg, 2x Sausages, 2x Bacons and bap",
        price: 3,
      },
    ],
    drinks: [
      {
        id: 4,
        name: "Coke",
        description: "A pint of Coco Cola",
        price: 2,
      },
      {
        id: 5,
        name: "Beer",
        description: "A pint of Beer",
        price: 3.2,
      },
      {
        id: 6,
        name: "Juice",
        description:
          "A selection of the finest fruit juice: Orange, Apple, Mango and Pineappple",
        price: 2,
      },
    ],
    main: [
      {
        id: 7,
        name: "Fish + chips",
        description: "Traditional British battered fish and chucky chips",
        price: 7,
      },
      {
        id: 8,
        name: "Chicken burger + chips",
        description:
          "Chicken Breast marinated with BBQ sauce with grilled onions, lettuce and tomatoes. Served with chucky chips",
        price: 7,
      },
      {
        id: 9,
        name: "Hot Dog + chips",
        description:
          "Foot long Manchester sausage with grilled onions and chucky chips",
        price: 8,
      },
    ],
    sides: [
      {
        id: 10,
        name: "Chips",
        description: "A plate full of chips",
        price: 2,
      },
      {
        id: 11,
        name: "Wedges",
        description: "A plate full of Wedges",
        price: 2,
      },
      {
        id: 12,
        name: "Rice",
        description: "A plate full of Rice",
        price: 2.5,
      },
    ],
    starters: [
      {
        id: 13,
        name: "Nanchos",
        description: "A plate full of Nanchos with cheese and salsa dip",
        price: 3,
      },
      {
        id: 14,
        name: "Garlic bread",
        description: "3 peices of sliced garlic bread baguette",
        price: 3,
      },
      {
        id: 15,
        name: "wings",
        description: "6 wing platter with a choice of",
        price: 4.5,
      },
    ],
  };

  res.status(200).json(menu);
}
