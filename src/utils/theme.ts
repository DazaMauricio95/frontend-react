import { createTheme } from "@material-ui/core";
import tinycolor from "tinycolor2";
const primaryDefault = "#1769aa";
const lightenRate = 0;

export function themeMaterial(themeIsDark: boolean) {
  const theme = createTheme({
    palette: {
      type: themeIsDark ? "dark" : "light",
      primary: {
        light: "#757ce8",
        main: primaryDefault,
        dark: "#002884",
        contrastText: "#e8e8e8",
      },
      secondary: {
        light: "#ff7961",
        main: "#3682f4",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.7em",
            height: "0.7rem",
          },
          "*::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgb(23 19 19 / 0%)",
            webkitBoxShadow: "inset 0 0 6px rgb(23 19 19 / 0%)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: tinycolor(primaryDefault)
              .lighten(lightenRate)
              .setAlpha(0.68)
              .toRgbString(),
            outline: "1px solid slategrey",
          },
        },
      },
      MuiAppBar: {
        root: {
          width: "100vw",
          zIndex: 1201,
        },
      },
    },
  });
  return theme;
}
