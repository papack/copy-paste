import React from "react";
import { RepeatProps } from "./RepeatProps";

/** Repeat a children n times */
export const Repeat = ({ children, n = 1 }: RepeatProps) => {
  return (
    <>
      {[...Array(n)].map((_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      ))}
    </>
  );
};
