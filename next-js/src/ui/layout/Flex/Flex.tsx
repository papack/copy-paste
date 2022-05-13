import React from "react";
import { Box } from "../Box";
import { FlexProps } from "./FlexProps";

export const Flex = (props: FlexProps) => {
  //spread props
  const { children, css, jc, ai, ac, g, flxDirection, flxWrap, flxFlow } =
    props;

  return (
    <Box
      {...props}
      css={{
        display: "flex",
        justifyContent: jc,
        alignItems: ai,
        alignContent: ac,
        flexDirection: flxDirection,
        flexWrap: flxWrap,
        flexFlow: flxFlow,
        gap: g,
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
