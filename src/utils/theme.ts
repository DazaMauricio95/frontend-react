import { createTheme } from "@material-ui/core";

const primaryDefault = "#1769aa";

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
                contrastText: "#000"
            } 
        }
    })
    return theme
}