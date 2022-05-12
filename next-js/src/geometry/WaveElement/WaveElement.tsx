import React from "react";
import { Path } from "../../styled";
import { Box } from "../../layout";
import { WaveElementProps } from "./WaveElementProps";

export const WaveElement = ({
  color1,
  color2,
  height,
  mb = "",
  mirrored = false,
  mt = "",
  separatorColor = "transparent",
  separatorHeight = 0,
}: WaveElementProps) => {
  return (
    <Box mt={mt} mb={mb}>
      <svg
        preserveAspectRatio="none"
        height={height}
        width="100%"
        viewBox="-100 -100 200 200"
        fill="none"
      >
        {/* top */}

        <g transform={mirrored ? `scale(-1, 1)` : ""}>
          <Path
            css={{ fill: color1 }}
            d={`
            M -100 0 
            C 0 100 0 -100 100 0 
            L 100 -100 
            L -100 -100 
            Z 
    `}
          />

          {/* button */}
          <Path
            css={{ fill: color2 }}
            d={`
            M -100 0 
            C 0 100 0 -100 100 0  
            L 100 100 
            L -100 100 
            Z 
    `}
          />

          {/* separator */}
          {separatorHeight > 0 && (
            <Path
              css={{ fill: separatorColor }}
              d={`
            M -100 -${separatorHeight / 2}

            C 0 ${100 - separatorHeight / 2} 0 ${
                -100 - separatorHeight / 2
              } 100 -${separatorHeight / 2}  

            V ${separatorHeight}

            C 0 ${-100 + separatorHeight / 2} 0 ${
                100 + separatorHeight / 2
              } -100 ${separatorHeight / 2}

            Z 
    `}
            />
          )}
        </g>
      </svg>
    </Box>
  );
};
