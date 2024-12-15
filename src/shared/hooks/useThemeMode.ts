import { useContext } from "react";
import { ThemeModeContext, ThemeModeContextType } from "src/app/context/theme-mode";

export default function useThemeMode(): ThemeModeContextType {
  const context = useContext(ThemeModeContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
