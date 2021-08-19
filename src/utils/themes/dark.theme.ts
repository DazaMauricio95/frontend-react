import tinycolor from "tinycolor2";
const primary = "#303030";
const secondary = "#1769aa"; //Azul Mbm
const warning = "#FFC260";
const success = "#269c4b";
const info = "#2196f3";
const lightenRate = 7.5;
const darkenRate = 15;
const background = "#212121";
const textPrimary = "#f5f5f5";
const textSecondary = "#bdbdbd";
const textHint = "#e0e0e0";
const primaryBlue = "#2196f3";
const darkTheme = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .setAlpha(0.68)
        .toRgbString(),
      dark: tinycolor(primaryBlue).darken(darkenRate).toHexString()
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString()
    },
    warning: {
      main: warning
    },
    success: {
      main: success
    },
    info: {
      main: info
    },
    text: {
      main: textPrimary,
      primary: textPrimary,
      secondary: textSecondary,
      hint: textHint
    },
    background: {
      default: background,
      paper: primary
    },
    action: {
      disabled: primary,
      disabledBackground: "#828282"
    }
  },
  overrides: {
    MuiListItemIcon: {
      root: {
        color: "white"
      }
    },
    MuiIconButton: {
      root: {
        color: "white"
      }
    }
  } 
};
export default darkTheme;