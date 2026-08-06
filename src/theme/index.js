import { createContext } from "react";
import { createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export function createAppTheme(mode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: "#2cbd7d" },
      background: {
        default: isDark ? "#101713" : "#ffffff",
        paper: isDark ? "#18221d" : "#ffffff",
      },
      text: {
        primary: isDark ? "#f5fbf7" : "#111111",
        secondary: isDark ? "#b8c8be" : "#777777",
      },
    },
    typography: { fontFamily: "Arial, Helvetica, sans-serif" },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? "#101713" : "#ffffff",
            transition: "background-color 180ms ease, color 180ms ease",
          },
        },
      },
    },
  });
}
