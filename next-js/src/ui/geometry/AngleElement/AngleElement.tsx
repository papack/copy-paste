import React from "react";
import { Box } from "../../layout";
import { Path } from "../../elements";
import { AngleElementProps } from "./AngleElementProps";

export const AngleElement = ({
  color1,
  color2,
  height,
  mb = "",
  mirrored = false,
  mt = "",
  separatorHeight = 0,
  separatorColor = "transparent",
}: AngleElementProps) => {
  return (
    <Box mt={mt} mb={mb}>
      <svg
        width="100%"
        height={height}
        viewBox="-100 -100 200 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <g transform={mirrored ? `scale(-1, 1)` : ""}>
          {/* top */}
          <Path
            d={`
        M -100, -100
        l 200, 0
        l 0, 200
        z
      `}
            css={{ fill: color1 }}
          />

          {/* button */}
          <Path
            d={`
        M -100, -100
        l 0,200
        l 200,0
        z
      `}
            css={{ fill: color2 }}
          />

          {/*separator*/}

          {separatorHeight > 0 && (
            <Path
              d={`
        M -100 ${-100 + separatorHeight} 
        L -100 -100 
        L 100 ${100 - separatorHeight}
        L 100 100
        Z
        `}
              css={{ fill: separatorColor }}
            />
          )}
        </g>
      </svg>
    </Box>
  );
};
