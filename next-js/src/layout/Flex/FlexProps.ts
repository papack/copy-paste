import { FlexItemProps } from "../FlexItem/FlexItemProps";

//interface
export interface FlexProps extends FlexItemProps {
  /** justify conten */
  jc?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /** align Items */
  ai?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  /** align Conten */
  ac?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  /** gap */
  g?: string;

  /** flex-direction */
  flxDirection?: "row" | "column" | "row-reverse" | "column-reverse";

  /** flex-wrap */
  flxWrap?: "wrap" | "nowrap" | "wrap-reverse";

  /** flex-flow */
  flxFlow?: "row" | "column" | "row-reverse" | "column-reverse";
}
