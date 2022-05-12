import React from "react";
import { CircleProps } from "./CircleProps";
import { Box } from "../../layout";

export const Circle = ({ b, c = "gray", s = "100px" }: CircleProps) => {
  return <Box b={b} s={s} bg={c} r="100%" />;
};
