import { globalCss } from "./stitches.config";

export const globalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontSize: "16rem",
    fontFamily: "$body",
  },
  html: {
    fontSize: "6.25%",
  },
});
