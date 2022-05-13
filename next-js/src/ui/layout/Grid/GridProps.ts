import { GridItemProps } from "../GridItem/GridtemProps";

//interface
export interface GridProps extends GridItemProps {
  g?: string;
  grdTemplateColumns?: string;
  grdTemplateRows?: string;
  grdTemplateAreas?: string;
  grdTemplate?: string;
  grdAutoColumns?: string;
  grdAutoRows?: string;
  grdAutoFlow?: string;
  grd?: string;
  grdRowStart?: string;
  grdColumnStart?: string;
  grdRowEnd?: string;
  grdColumnEnd?: string;
  grdRow?: string;
  grdColumn?: string;
  grdRowGap?: string;
  grdColumnGap?: string;
  grdGap?: string;
}
