import React from "react";
import { AbsoluteProps } from "./AbsoluteProps";
import { Box } from "@ui";

export const Absolute = (props: AbsoluteProps) => {
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
        position: "absolute",
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
