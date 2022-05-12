import { Globals, OnlyStringNumeric } from "@stitches/react/types/css";
import { ScaleValue } from "@stitches/react/types/theme";
import { Index } from "@stitches/react/types/util";
import { BoxProps } from "../Box/BoxProps";

type Top = "auto" | OnlyStringNumeric;

export interface AbsoluteProps extends BoxProps {
  top?: Globals | ScaleValue | Index | Top | undefined;
  right?: Globals | ScaleValue | Index | Top | undefined;
  bottom?: Globals | ScaleValue | Index | Top | undefined;
  left?: Globals | ScaleValue | Index | Top | undefined;
}
