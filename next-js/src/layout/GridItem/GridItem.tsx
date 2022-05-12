import React from "react";
import { Box } from "../Box";
import { GridItemProps } from "./GridtemProps";

export const GridItem = (props: GridItemProps) => {
  //spread props
  const { children, css, grdArea } = props;

  return (
    <Box
      {...props}
      css={{
        gridArea: grdArea,
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
