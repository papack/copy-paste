import type * as Stitches from "@stitches/react";
import type * as framer from "framer-motion";
import {
  CustomStyles,
  SVGPathProperties,
  TransformProperties,
} from "framer-motion/types/motion/types";
import {
  MakeCustomValueType,
  TargetAndTransition,
} from "framer-motion/types/types";
import { CSSProperties, SVGAttributes } from "react";

//create framer types
type CSSPropertiesWithoutTransitionOrSingleTransforms = Omit<
  CSSProperties,
  "transition" | "rotate" | "scale" | "perspective"
>;
type TargetProperties = CSSPropertiesWithoutTransitionOrSingleTransforms &
  SVGAttributes<SVGElement> &
  TransformProperties &
  CustomStyles &
  SVGPathProperties;

//interface
export interface BoxProps {
  /*the react children elements*/
  children?: React.ReactNode;

  //Events
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onScroll?: React.UIEventHandler;

  /*additional css*/
  css?: Stitches.CSS;

  /* Put childrens in AnimationPresence Container */
  animationPresence?: boolean;

  /** inital (framer-motione) */
  i?:
    | boolean
    | framer.VariantLabels
    | MakeCustomValueType<TargetProperties>
    | undefined;

  /** animate (framer-motione) */
  a?:
    | boolean
    | framer.TargetAndTransition
    | framer.VariantLabels
    | framer.AnimationControls
    | undefined;

  /** exit (framer motion) */
  e?: TargetAndTransition | framer.VariantLabels | undefined;

  /** drag (framer-motion) */
  d?: boolean | "x" | "y" | undefined;

  /** drag Constraints */
  dc?:
    | false
    | Partial<framer.BoundingBox>
    | React.RefObject<Element>
    | undefined;

  /** transition framer-motion */
  t?: framer.Transition | undefined;

  /** variants framer-motion */
  v?: framer.Variants;

  /** text color */
  c?: string;

  /** margin */
  m?: string;

  /** margin x */
  mx?: string;

  /** margin y */
  my?: string;

  /** margin right*/
  mr?: string;

  /** margin left*/
  ml?: string;

  /** margin top*/
  mt?: string;

  /** margin bottom*/
  mb?: string;

  /** padding */
  p?: string;

  /** padding x */
  px?: string;

  /** padding y */
  py?: string;

  /** padding right*/
  pr?: string;

  /** padding left*/
  pl?: string;

  /** padding top*/
  pt?: string;

  /** padding bottom*/
  pb?: string;

  /** width */
  w?: string;

  /** height */
  h?: string;

  /** size */
  s?: string;

  /** min width */
  minW?: string;

  /** max width*/
  maxW?: string;

  /** min height */
  minH?: string;

  /** max height */
  maxH?: string;

  /** background */
  bg?: string;

  /** border */
  b?: string;

  /** border x*/
  bx?: string;

  /** border y */
  by?: string;

  /** border top */
  bt?: string;

  /** border right*/
  br?: string;

  /** border left*/
  bl?: string;

  /** border bottom */
  bb?: string;

  /** border radius */
  r?: string;

  /** border radius top*/
  rt?: string;

  /** border radius right */
  rr?: string;

  /** border radius left */
  rl?: string;

  /** border radius bottom */
  rb?: string;

  /** border radius top right*/
  rtr?: string;

  /** border radius top left */
  rtl?: string;

  /** border radius bottom right */
  rbr?: string;

  /** border radius bottom left */
  rbl?: string;

  /** shadow */
  shadow?: string;
}
