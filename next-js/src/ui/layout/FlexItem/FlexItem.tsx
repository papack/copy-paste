import React from "react";
import { Box } from "../Box";
import { FlexItemProps } from "./FlexItemProps";

export const FlexItem = (props: FlexItemProps) => {
  //spread props
  const { children, css, flx, as, o, flxGrow, flxShrink, flxBasis } = props;

  return (
    <Box
      {...props}
      css={{
        flex: flx,
        order: o,
        alignSelf: as,
        flexGrow: flxGrow,
        flexShrink: flxShrink,
        flexBasis: flxBasis,
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
