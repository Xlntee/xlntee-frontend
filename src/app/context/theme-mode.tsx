import { createContext, ReactNode, memo, useEffect, useState } from "react";

import { PaletteMode } from "@mui/material";
import { localStorageKeys } from "src/shared/config/local-storage-keys";

export type ThemeModeContextType = {
  mode: PaletteMode;
  toggleThemeMode?: () => void;
};

type ThemeModeContextProps = {
  children?: ReactNode;
};

const themeMode = {
  dark: "dark",
  light: "light"
} as const;

const initialState: ThemeModeContextType = {
  mode: "light",
  toggleThemeMode: () => {}
};

export const ThemeModeContext = createContext<ThemeModeContextType>(initialState);

function ThemeProvider({ children }: ThemeModeContextProps): JSX.Element {
  const [themeColor, setThemeColor] = useState<PaletteMode>(themeMode.light);

  useEffect(() => {
    const theme = localStorage.getItem(localStorageKeys.themeMode) || themeColor;
    document.documentElement.setAttribute("data-theme", theme);
    setThemeColor(theme as PaletteMode);
  }, [themeColor]);

  function toggleTheme(): void {
    if (themeColor === themeMode.light) {
      setThemeColor(themeMode.dark);
      localStorage.setItem(localStorageKeys.themeMode, themeMode.dark);
    } else {
      setThemeColor(themeMode.light);
      localStorage.setItem(localStorageKeys.themeMode, themeMode.light);
    }
  }

  const values = {
    mode: themeColor,
    toggleThemeMode: toggleTheme
  };

  return <ThemeModeContext.Provider value={values}>{children}</ThemeModeContext.Provider>;
}

const ThemeModeProviderMemo = memo(ThemeProvider);

export { ThemeModeProviderMemo as ThemeModeProvider };
