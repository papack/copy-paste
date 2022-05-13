import React from "react";
import { FixedProps } from "./FixedProps";
import { Box } from "../Box";

export const Fixed = (props: FixedProps) => {
  const {
    css,
    children,
    top = "auto",
    bottom = "auto",
    left = "auto",
    right = "auto",
  } = props;

  return (
    <Box
      {...props}
      css={{
        position: "fixed",
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
