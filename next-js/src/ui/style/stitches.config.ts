// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    //
    // BaseStyle
    //

    //font familys
    fonts: {
      //base
      body: "sans-serif",
      heading1: "sans-serif",
      heading2: "sans-serif",
      heading3: "sans-serif",
      heading4: "sans-serif",
      heading5: "sans-serif",
      heading6: "sans-serif",

      //button
      buttonFontFamily: "$body",
    },

    //font sizes
    fontSizes: {
      //base
      sm: "14rem",
      md: "16rem",
      lg: "18rem",
      xl: "20rem",
      "2xl": "24rem",
      "3xl": "28rem",
      "4xl": "32rem",
      "5xl": "36rem",
      "6xl": "40rem",
      "7xl": "44rem",
      "8xl": "48rem",
      "9xl": "52rem",
      "10xl": "56rem",

      //button
      buttonFontSize: "$md",
    },

    //font weights
    fontWeights: {
      thin: "100",
      ultralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",

      //button
      buttonFontWeight: "$normal",
    },

    //line heights
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    //letter spacing
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    //border widths
    borderWidths: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem",
      xl: "8rem",

      //button
      buttonBorderWidth: "$sm",
    },

    //border styles
    borderStyles: {
      default: "solid",

      //button
      buttonBorderStyle: "$default",
    },

    //radii
    radii: {
      //base
      default: "$lg",
      sm: "2rem",
      md: "4rem",
      lg: "8rem",
      xl: "16rem",
      "2xl": "32rem",
      "3xl": "48rem",
      "4xl": "64rem",
      "5xl": "80rem",
      "6xl": "96rem",
      "7xl": "112rem",
      "8xl": "128rem",
      "9xl": "144rem",
      "10xl": "160rem",

      //Button
      buttonRadius: "$md",
    },

    //shadows
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },

    //z-indexes
    zIndices: {
      auto: "auto",
      background: "-1",
      normal: "1",
      modal: "2",
      dialog: "3",
    },

    //spacing
    space: {
      //base
      sm: "2px",
      md: "4rem",
      lg: "8rem",
      xl: "16rem",
      "2xl": "32rem",
      "3xl": "48rem",
      "4xl": "64rem",
      "5xl": "80rem",
      "6xl": "96rem",
      "7xl": "112rem",
      "8xl": "128rem",
      "9xl": "144rem",
      "10xl": "160rem",

      //button spacing
      buttonPaddingYSmall: "$md",
      buttonPaddingXSmall: "$md",
      buttonPaddingYMedium: "$lg",
      buttonPaddingXMedium: "$xl",
      buttonPaddingYLarge: "$xl",
      buttonPaddingXLarge: "$xl",
    },

    //size
    sizes: {
      sm: "25rem",
      md: "40rem",
      lg: "60rem",
      xl: "100rem",
      "2xl": "150rem",
      "3xl": "200rem",
      "4xl": "250rem",
      "5xl": "300rem",
      "6xl": "350rem",
      "7xl": "400rem",
      "8xl": "450rem",
      "9xl": "500rem",
      "10xl": "550rem",
    },

    //colors
    colors: {
      //base
      background: "$white",

      //variants
      primary: "$indigo",
      secondary: "$blue",
      success: "$green",
      danger: "$red",
      warning: "$yellow",
      info: "$blue",
      light: "$gray",
      dark: "$black",

      //lighten
      primaryLight: "$indigoLight",
      secondaryLight: "$blueLight",
      successLight: "$greenLight",
      dangerLight: "$redLight",
      warningLight: "$yellowLight",
      infoLight: "$blueLight",
      lightLight: "$grayLight",
      darkLight: "$black",

      //darken
      primaryDark: "$indigoDark",
      secondaryDark: "$blueDark",
      successDark: "$greenDark",
      dangerDark: "$redDark",
      warningDark: "$yellowDark",
      infoDark: "$blueDark",
      lightDark: "$grayDark",
      darkDark: "$black",

      //disabled
      primaryDisabled: "$indigoDisabled",
      secondaryDisabled: "$blueDisabled",
      successDisabled: "$greenDisabled",
      dangerDisabled: "$redDisabled",
      warningDisabled: "$yellowDisabled",
      infoDisabled: "$blueDisabled",
      lightDisabled: "$grayDisabled",
      darkDisabled: "$black",

      //text onColors
      onPrimary: "$white",
      onSecondary: "$white",
      onSuccess: "$white",
      onDanger: "$white",
      onWarning: "$gray800",
      onInfo: "$white",
      onDark: "$white",
      onLight: "$white",

      //text disabledColors
      onPrimaryDisabled: "$gray",
      onSecondaryDisabled: "$gray",
      onSuccessDisabled: "$gray",
      onDangerDisabled: "$gray",
      onWarningDisabled: "$gray",
      onInfoDisabled: "$gray",
      onDarkDisabled: "$gray600",
      onLightDisabled: "$gray",

      //font colors
      body: "$gray700",
      heading1: "$black",
      heading2: "$black",
      heading3: "$black",
      heading4: "$black",
      heading5: "$black",
      heading6: "$black",

      //main colors
      black: "$black500",
      white: "$white500",
      gray: "$gray500",
      red: "$red500",
      green: "$green500",
      blue: "$blue500",
      indigo: "$indigo500",
      yellow: "$yellow500",
      orange: "$orange500",
      pink: "$pink500",
      teal: "$teal500",
      purple: "$purple500",
      lime: "$lime500",
      grape: "$grape500",
      violet: "$violet500",

      //main colors light
      blackLight: "$black300",
      whiteLight: "$white300",
      grayLight: "$gray400",
      redLight: "$red400",
      greenLight: "$green400",
      blueLight: "$blue400",
      indigoLight: "$indigo400",
      yellowLight: "$yellow400",
      orangeLight: "$orange400",
      pinkLight: "$pink400",
      tealLight: "$teal400",
      purpleLight: "$purple400",
      limeLight: "$lime400",
      grapeLight: "$grape400",
      violetLight: "$violet400",

      //main colors dark
      blackDark: "$black600",
      whiteDark: "$white600",
      grayDark: "$gray600",
      redDark: "$red600",
      greenDark: "$green600",
      blueDark: "$blue600",
      indigoDark: "$indigo600",
      yellowDark: "$yellow600",
      orangeDark: "$orange600",
      pinkDark: "$pink600",
      tealDark: "$teal600",
      purpleDark: "$purple600",
      limeDark: "$lime600",
      grapeDark: "$grape600",
      violetDark: "$violet600",

      //main colors disabled
      blackDisabled: "$gray500",
      whiteDisabled: "$white100",
      grayDisabled: "$gray100",
      redDisabled: "$red100",
      greenDisabled: "$green100",
      blueDisabled: "$blue100",
      indigoDisabled: "$indigo100",
      yellowDisabled: "$yellow100",
      orangeDisabled: "$orange100",
      pinkDisabled: "$pink100",
      tealDisabled: "$teal100",
      purpleDisabled: "$purple100",
      limeDisabled: "$lime100",
      grapeDisabled: "$grape100",
      violetDisabled: "$violet100",

      //
      //color shades
      //

      //black
      black100: "#080808",
      black200: "#070707",
      black300: "#060606",
      black400: "#050505",
      black500: "#040404",
      black600: "#030303",
      black700: "#020202",
      black800: "#010101",
      black900: "#000000",

      //white
      white100: "#f7f7f7",
      white200: "#f8f8f8",
      white300: "#f9f9f9",
      white400: "#fafafa",
      white500: "#fbfbfb",
      white600: "#fcfcfc",
      white700: "#fdfdfd",
      white800: "#fefefe",
      white900: "#ffffff",

      //gray
      gray100: "#f1f3f5",
      gray200: "#e9ecef",
      gray300: "#dee2e6",
      gray400: "#ced4da",
      gray500: "#adb5bd",
      gray600: "#868e96",
      gray700: "#495057",
      gray800: "#343a40",
      gray900: "#212529",

      //red
      red100: "#ffe3e3",
      red200: "#ffc9c9",
      red300: "#ffa8a8",
      red400: "#ff8787",
      red500: "#ff6b6b",
      red600: "#fa5252",
      red700: "#f03e3e",
      red800: "#e03131",
      red900: "#c92a2a",

      //pink
      pink100: "#ffdeeb",
      pink200: "#fcc2d7",
      pink300: "#faa2c1",
      pink400: "#f783ac",
      pink500: "#f06595",
      pink600: "#e64980",
      pink700: "#d6336c",
      pink800: "#c2255c",
      pink900: "#a61e4d",

      //grape
      grape100: "#f3d9fa",
      grape200: "#eebefa",
      grape300: "#e599f7",
      grape400: "#da77f2",
      grape500: "#cc5de8",
      grape600: "#be4bdb",
      grape700: "#ae3ec9",
      grape800: "#9c36b5",
      grape900: "#862e9c",

      //violet
      violet100: "#e5dbff",
      violet200: "#d0bfff",
      violet300: "#b197fc",
      violet400: "#9775fa",
      violet500: "#845ef7",
      violet600: "#7950f2",
      violet700: "#7048e8",
      violet800: "#6741d9",
      violet900: "#5f3dc4",

      //indigo
      indigo100: "#dbe4ff",
      indigo200: "#bac8ff",
      indigo300: "#91a7ff",
      indigo400: "#748ffc",
      indigo500: "#5c7cfa",
      indigo600: "#4c6ef5",
      indigo700: "#4263eb",
      indigo800: "#3b5bdb",
      indigo900: "#364fc7",

      //blue
      blue100: "#d0ebff",
      blue200: "#a5d8ff",
      blue300: "#74c0fc",
      blue400: "#4dabf7",
      blue500: "#339af0",
      blue600: "#228be6",
      blue700: "#1c7ed6",
      blue800: "#1971c2",
      blue900: "#1864ab",

      //cyan
      cyan100: "#c5f6fa",
      cyan200: "#99e9f2",
      cyan300: "#66d9e8",
      cyan400: "#3bc9db",
      cyan500: "#22b8cf",
      cyan600: "#15aabf",
      cyan700: "#1098ad",
      cyan800: "#0c8599",
      cyan900: "#0b7285",

      //teal
      teal100: "#c3fae8",
      teal200: "#96f2d7",
      teal300: "#63e6be",
      teal400: "#38d9a9",
      teal500: "#20c997",
      teal600: "#12b886",
      teal700: "#0ca678",
      teal800: "#099268",
      teal900: "#087f5b",

      //green
      green100: "#d3f9d8",
      green200: "#b2f2bb",
      green300: "#8ce99a",
      green400: "#69db7c",
      green500: "#51cf66",
      green600: "#40c057",
      green700: "#37b24d",
      green800: "#2f9e44",
      green900: "#2b8a3e",

      //lime
      lime100: "#e9fac8",
      lime200: "#d8f5a2",
      lime300: "#c0eb75",
      lime400: "#a9e34b",
      lime500: "#94d82d",
      lime600: "#82c91e",
      lime700: "#74b816",
      lime800: "#66a80f",
      lime900: "#5c940d",

      //yellow
      yellow100: "#fff3bf",
      yellow200: "#ffec99",
      yellow300: "#ffe066",
      yellow400: "#ffd43b",
      yellow500: "#fcc419",
      yellow600: "#fab005",
      yellow700: "#f59f00",
      yellow800: "#f08c00",
      yellow900: "#e67700",

      //orange
      orange100: "#ffe8cc",
      orange200: "#ffd8a8",
      orange300: "#ffc078",
      orange400: "#ffa94d",
      orange500: "#ff922b",
      orange600: "#fd7e14",
      orange700: "#f76707",
      orange800: "#e8590c",
      orange900: "#d9480f",

      //
      // Button
      //

      //Button Background
      buttonPrimaryBackground: "$primary",
      buttonSecondaryBackground: "$secondary",
      buttonSuccessBackground: "$success",
      buttonDangerBackground: "$danger",
      buttonWarningBackground: "$warning",
      buttonInfoBackground: "$info",
      buttonLightBackground: "$light",
      buttonDarkBackground: "$dark",

      //Button Text
      buttonPrimaryText: "$onPrimary",
      buttonSecondaryText: "$onSecondary",
      buttonSuccessText: "$onSuccess",
      buttonDangerText: "$onDanger",
      buttonWarningText: "$onWarning",
      buttonInfoText: "$onInfo",
      buttonLightText: "$black",
      buttonDarkText: "$white",

      //Button Border
      buttonPrimaryBorder: "$buttonPrimaryBackground",
      buttonSecondaryBorder: "$buttonSecondaryBackground",
      buttonSuccessBorder: "$buttonSuccessBackground",
      buttonDangerBorder: "$buttonDangerBackground",
      buttonWarningBorder: "$buttonWarningBackground",
      buttonInfoBorder: "$buttonInfoBackground",
      buttonLightBorder: "$buttonLightBackground",
      buttonDarkBorder: "$buttonDarkBackground",

      //Button Hover Background
      buttonPrimaryHoverBackground: "$primaryDark",
      buttonSecondaryHoverBackground: "$secondaryDark",
      buttonSuccessHoverBackground: "$successDark",
      buttonDangerHoverBackground: "$dangerDark",
      buttonWarningHoverBackground: "$warningDark",
      buttonInfoHoverBackground: "$infoDark",
      buttonLightHoverBackground: "$grayDark",
      buttonDarkHoverBackground: "$darkDark",

      //Button Hover Text
      buttonPrimaryHoverText: "$buttonPrimaryText",
      buttonSecondaryHoverText: "$buttonSecondaryText",
      buttonSuccessHoverText: "$buttonSuccessText",
      buttonDangerHoverText: "$buttonDangerText",
      buttonWarningHoverText: "$buttonWarningText",
      buttonInfoHoverText: "$buttonInfoText",
      buttonLightHoverText: "$buttonLightText",
      buttonDarkHoverText: "$buttonDarkText",

      //Button Hover Border
      buttonPrimaryHoverBorder: "$buttonPrimaryHoverBackground",
      buttonSecondaryHoverBorder: "$buttonSecondaryHoverBackground",
      buttonSuccessHoverBorder: "$buttonSuccessHoverBackground",
      buttonDangerHoverBorder: "$buttonDangerHoverBackground",
      buttonWarningHoverBorder: "$buttonWarningHoverBackground",
      buttonInfoHoverBorder: "$buttonInfoHoverBackground",
      buttonLightHoverBorder: "$buttonLightHoverBackground",
      buttonDarkHoverBorder: "$buttonDarkHoverBackground",

      //Button Active Background
      buttonPrimaryActiveBackground: "$primary",
      buttonSecondaryActiveBackground: "$secondary",
      buttonSuccessActiveBackground: "$success",
      buttonDangerActiveBackground: "$danger",
      buttonWarningActiveBackground: "$warning",
      buttonInfoActiveBackground: "$info",
      buttonLightActiveBackground: "$gray",
      buttonDarkActiveBackground: "$dark",

      //Button Active Text
      buttonPrimaryActiveText: "$buttonPrimaryText",
      buttonSecondaryActiveText: "$buttonSecondaryText",
      buttonSuccessActiveText: "$buttonSuccessText",
      buttonDangerActiveText: "$buttonDangerText",
      buttonWarningActiveText: "$buttonWarningText",
      buttonInfoActiveText: "$buttonInfoText",
      buttonLightActiveText: "$buttonLightText",
      buttonDarkActiveText: "$buttonDarkText",

      //Button Active Border
      buttonPrimaryActiveBorder: "$buttonPrimaryActiveBackground",
      buttonSecondaryActiveBorder: "$buttonSecondaryActiveBackground",
      buttonSuccessActiveBorder: "$buttonSuccessActiveBackground",
      buttonDangerActiveBorder: "$buttonDangerActiveBackground",
      buttonWarningActiveBorder: "$buttonWarningActiveBackground",
      buttonInfoActiveBorder: "$buttonInfoActiveBackground",
      buttonLightActiveBorder: "$buttonLightActiveBackground",
      buttonDarkActiveBorder: "$buttonDarkActiveBackground",

      //Button outline Text
      buttonPrimaryOutlineText: "$primary",
      buttonSecondaryOutlineText: "$secondary",
      buttonSuccessOutlineText: "$success",
      buttonDangerOutlineText: "$danger",
      buttonWarningOutlineText: "$warning",
      buttonInfoOutlineText: "$info",
      buttonLightOutlineText: "$gray900",
      buttonDarkOutlineText: "$dark",

      //Button active outline Text
      buttonPrimaryActiveOutlineText: "$primaryDark",
      buttonSecondaryActiveOutlineText: "$secondaryDark",
      buttonSuccessActiveOutlineText: "$successDark",
      buttonDangerActiveOutlineText: "$dangerDark",
      buttonWarningActiveOutlineText: "$warningDark",
      buttonInfoActiveOutlineText: "$infoDark",
      buttonLightActiveOutlineText: "$grayDark",
      buttonDarkActiveOutlineText: "$darkDark",

      //Button hover outline Text
      buttonPrimaryHoverOutlineText: "$primaryLight",
      buttonSecondaryHoverOutlineText: "$secondaryLight",
      buttonSuccessHoverOutlineText: "$successLight",
      buttonDangerHoverOutlineText: "$dangerLight",
      buttonWarningHoverOutlineText: "$warningLight",
      buttonInfoHoverOutlineText: "$infoLight",
      buttonLightHoverOutlineText: "$grayLight",
      buttonDarkHoverOutlineText: "$darkLight",
    },
  },
});
