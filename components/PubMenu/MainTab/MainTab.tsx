import { Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import { Image } from "@chakra-ui/react";

export const MainTab: FC = () => {
  return (
    <VStack>
      <Image src={"pub_logo_the_downtrend.svg"} />
      <Text>Main</Text>
    </VStack>
  );
};
