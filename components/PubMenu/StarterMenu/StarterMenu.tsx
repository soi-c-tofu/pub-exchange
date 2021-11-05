import { VStack } from "@chakra-ui/layout";
import React, { FC } from "react";
import { MenuItem } from "../../../api/types";
import { MenuItemDisplay } from "../MainMenu/MenuItem";

export interface StarterMenuProps {
  menuItems: MenuItem[];
}

export const StarterMenu: FC<StarterMenuProps> = ({ menuItems }) => {
  return (
    <VStack align="stretch">
      {menuItems.map((menuItem, index) => {
        return (
          <MenuItemDisplay
            key={index}
            {...menuItem}
            onAddClick={() => {
              console.log(`adding item ${menuItem.name}`);
            }}
            onMinusClick={() => {
              console.log(`Removing item ${menuItem.name}`);
            }}
          />
        );
      })}
    </VStack>
  );
};
