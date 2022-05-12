import React from "react";
import { SquareProps } from "./SquareProps";
import { Box } from "../../layout";

export const Square = ({ b, c = "gray", s = "100px" }: SquareProps) => {
  return <Box b={b} s={s} bg={c} />;
};
