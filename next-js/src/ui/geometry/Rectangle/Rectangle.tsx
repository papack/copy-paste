import React from "react";
import { Box } from "../../layout";
import { RectangleProps } from "./RectangleProps";

export const Rectangle = ({
  b,
  c = "gray",
  h = "50px",
  w = "100px",
}: RectangleProps) => {
  return <Box w={w} h={h} bg={c} b={b} />;
};
