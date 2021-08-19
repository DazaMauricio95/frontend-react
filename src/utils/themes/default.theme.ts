import tinycolor from "tinycolor2";
const primary = "#1769aa";
const secondary = "#303030";
const warning = "#FFC260";
const success = "#269c4b";
const info = "#1769aa";
const lightenRate = 0;
const darkenRate = 1;
const textHint = "#f5f5f5";
const defaultTheme = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .setAlpha(0.83)
        .toRgbString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString()
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(75).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF"
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString()
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString()
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString()
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: textHint
    },
    background: {
      default: "#F6F7FF",
      light: "#F3F5FF"
    },
    action: {
      disabled: primary,
      disabledBackground: "#9ad3ff"
    }
  }
};
export default defaultTheme;