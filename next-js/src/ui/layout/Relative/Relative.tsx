import React from "react";
import { RelativeProps } from "./RelativeProps";
import { Box } from "../Box";

export const Relative = (props: RelativeProps) => {
  const { css, children } = props;

  return (
    <Box
      {...props}
      css={{
        position: "relative",
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
