import { createTheme } from "../stitches.config";

const className = createTheme({
  colors: {
    background: "$blue",
    body: "$white",
    onPrimary: "$white",
    onSecondary: "$white",
    onSuccess: "$white",
    onDanger: "$white",
    onWarning: "$black",
    onInfo: "$white",
  },
  fonts: {
    body: "serif",
    //button
    buttonFontFamily: "$body",
  },
});

export const darkTheme = { name: "dark", className };
