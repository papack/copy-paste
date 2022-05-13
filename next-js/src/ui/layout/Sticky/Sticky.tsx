import React from "react";
import { StickyProps } from "./StickyProps";
import { Box } from "../Box";

export const Sticky = (props: StickyProps) => {
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
        position: "sticky",
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
