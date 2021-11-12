import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useContext } from "react";
import { useQuery } from "react-query";
import { Menu, PubLocation } from "../../api/types";
import { BreakfastMenu } from "./BreakfastMenu/BreakfastMenu";
import { BreakfastTab } from "./BreakfastTab/BreakfastTab";
import { DrinkMenu } from "./DrinkMenu/DrinkMenu";
import { DrinkTab } from "./DrinkTab/DrinkTab";
import { MainMenu } from "./MainMenu/MainMenu";
import { MainTab } from "./MainTab/MainTab";
import { pubMenuContext } from "./PubMenuContext";
import { SideMenu } from "./SideMenu/SideMenu";
import { SideTab } from "./SideTab/SideTab";
import { StarterMenu } from "./StarterMenu/StarterMenu";
import { StartersTab } from "./StarterTab/StarterTab";

export interface PubMenuProps {
  setUserAtThisPubLocation: (pubLocation: PubLocation) => void;
}

export const PubMenu: FC<PubMenuProps> = ({ setUserAtThisPubLocation }) => {
  const { isLoading, error, data } = useContext(pubMenuContext);

  if (isLoading) return <Box>Loading...</Box>;

  if (error) return <Box>An error has occurred: ${error}</Box>;

  return (
    <VStack align="stretch">
      <Button
        onClick={() => {
          setUserAtThisPubLocation(undefined);
        }}
      >
        Choose another Pub
      </Button>
      <Tabs>
        <TabList overflowX="scroll">
          <Tab>
            <BreakfastTab />
          </Tab>
          <Tab>
            <StartersTab />
          </Tab>
          <Tab>
            <MainTab />
          </Tab>
          <Tab>
            <SideTab />
          </Tab>
          <Tab>
            <DrinkTab />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel overflowY="scroll">
            <BreakfastMenu menuItems={data.breakfasts} />
          </TabPanel>
          <TabPanel>
            <StarterMenu menuItems={data.starters} />
          </TabPanel>
          <TabPanel>
            <MainMenu menuItems={data.main} />
          </TabPanel>
          <TabPanel>
            <SideMenu menuItems={data.main} />
          </TabPanel>
          <TabPanel>
            <DrinkMenu menuItems={data.main} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};
