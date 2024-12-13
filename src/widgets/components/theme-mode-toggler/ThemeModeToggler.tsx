import { FC } from "react";

import { Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useThemeMode } from "src/hooks/useThemeMode";

const ThemeModeToggler: FC = () => {
  const { mode, toggleThemeMode } = useThemeMode();

  return (
    <Button onClick={toggleThemeMode}>
      {mode === "light" ? (
        <LightModeIcon
          fontSize="small"
          style={{
            fontSize: "24px"
          }}
        />
      ) : (
        <DarkModeIcon
          fontSize="small"
          style={{
            fontSize: "24px"
          }}
        />
      )}
    </Button>
  );
};

export default ThemeModeToggler;
