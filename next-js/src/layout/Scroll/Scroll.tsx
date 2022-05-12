import React from "react";
import { Absolute, Relative } from "../../layout";
import { ScrollProps } from "./ScrollProps";

export const Scroll = (props: ScrollProps) => {
  const { children, onScroll } = props;
  return (
    <Relative css={{ overflow: "auto" }} s="100%" onScroll={onScroll}>
      <Absolute top="0" left="0" right="0" bottom="0">
        {children}
      </Absolute>
    </Relative>
  );
};
