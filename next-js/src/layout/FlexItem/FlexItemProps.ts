import { BoxProps } from "../Box/BoxProps";

//interface
export interface FlexItemProps extends BoxProps {
  /** flex */
  flx?: string;

  /** align Self */
  as?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  /** Order */
  o?: number;

  /** flex-grow  */
  flxGrow?: number;

  /** flex-shrink */
  flxShrink?: number;

  /** flex-basis */
  flxBasis?: string;
}
