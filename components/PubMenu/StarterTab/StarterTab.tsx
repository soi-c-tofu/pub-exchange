import { Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import { Image } from "@chakra-ui/react";

export const StartersTab: FC = () => {
  return (
    <VStack>
      <Image src={"pub_logo_the_downtrend.svg"} />
      <Text>Starter</Text>
    </VStack>
  );
};
