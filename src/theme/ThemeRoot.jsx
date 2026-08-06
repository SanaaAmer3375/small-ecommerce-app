import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "../App";
import { ColorModeContext, createAppTheme } from "./index";

function ThemeRoot() {
  const [mode, setMode] = useState(() => localStorage.getItem("mina-space-theme") || "light");
  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const colorMode = useMemo(() => ({
    mode,
    toggleColorMode: () => setMode((currentMode) => {
      const nextMode = currentMode === "light" ? "dark" : "light";
      localStorage.setItem("mina-space-theme", nextMode);
      return nextMode;
    }),
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeRoot;
