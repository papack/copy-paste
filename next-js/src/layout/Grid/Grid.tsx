import React from "react";
import { Box } from "../Box";
import { GridProps } from "./GridProps";

export const Grid = (props: GridProps) => {
  //spread props
  const {
    children,
    css,
    grd,
    g,
    grdArea,
    grdAutoColumns,
    grdAutoFlow,
    grdAutoRows,
    grdColumn,
    grdColumnEnd,
    grdColumnGap,
    grdColumnStart,
    grdGap,
    grdRow,
    grdRowEnd,
    grdRowGap,
    grdRowStart,
    grdTemplate,
    grdTemplateAreas,
    grdTemplateColumns,
    grdTemplateRows,
  } = props;

  return (
    <Box
      {...props}
      css={{
        display: "grid",
        grid: grd,
        gridArea: grdArea,
        gridAutoColumns: grdAutoColumns,
        gridAutoFlow: grdAutoFlow,
        gridAutoRows: grdAutoRows,
        gridColumn: grdColumn,
        gridColumnEnd: grdColumnEnd,
        gridColumnGap: grdColumnGap,
        gridColumnStart: grdColumnStart,
        gridGap: grdGap || g,
        gridRow: grdRow,
        gridRowEnd: grdRowEnd,
        gridRowGap: grdRowGap,
        gridRowStart: grdRowStart,
        gridTemplate: grdTemplate,
        gridTemplateAreas: grdTemplateAreas,
        gridTemplateColumns: grdTemplateColumns,
        gridTemplateRows: grdTemplateRows,
        ...css,
      }}
    >
      {children}
    </Box>
  );
};
