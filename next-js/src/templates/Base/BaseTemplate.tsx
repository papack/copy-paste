import React from "react";
import { BaseTemplateProps } from "./interfaces";
import { Box, Grid, GridItem } from "@ui";

export const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <Grid grdTemplateRows="auto 1fr auto" minH="100vh">
      <GridItem>header</GridItem>
      <GridItem>{children}</GridItem>
      <GridItem>footer</GridItem>
    </Grid>
  );
};
