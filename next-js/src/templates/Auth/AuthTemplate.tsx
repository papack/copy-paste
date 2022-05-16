import React from "react";
import { Box, Center } from "@ui";
import { AuthTemplateProps } from "./interfaces";

export const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <Center minH="100vh">
      <Box b="1px solid black" p="$md" r="5px" bg="$gray100">
        {children}
      </Box>
    </Center>
  );
};
