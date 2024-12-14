import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeMode } from "src/shared/hooks/useThemeMode";

import getTheme from "src/shared/themes/theme";

function MuiProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { mode } = useThemeMode();

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiProvider;
