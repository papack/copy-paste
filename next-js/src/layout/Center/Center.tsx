import React from "react";
import { Box } from "../Box";
import { CenterProps } from "./CenterProps";

export const Center = (props: CenterProps) => {
  //spread props
  const { css, children, g, minH = "100%" } = props;

  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: minH,
        gap: g,
        ...css,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
