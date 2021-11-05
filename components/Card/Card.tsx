import { Box, Img } from "@chakra-ui/react";
import React, { FC } from "react";

export interface CardProps {
  imgSrc: string;
  changeToMenuHandler: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: FC<CardProps> = ({
  imgSrc,
  changeToMenuHandler,
  children,
}) => {
  return (
    <Box
      onClick={changeToMenuHandler}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Img src={imgSrc} />
      <Box p="6">{children}</Box>
    </Box>
  );
};
