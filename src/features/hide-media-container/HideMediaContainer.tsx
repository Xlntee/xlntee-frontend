import { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Breakpoint } from "@mui/material";
import getTheme from "src/shared/themes/theme";
import { useThemeMode } from "src/hooks/useThemeMode";

type HideMediaContainerProps = {
  children: React.ReactNode;
  type: "up" | "down";
  breakpoint: Breakpoint;
};

const HideMediaContainer: FC<HideMediaContainerProps> = ({ children, type, breakpoint }) => {
  const { mode } = useThemeMode();
  const isMobileMediaQuery = useMediaQuery(getTheme(mode).breakpoints[type](breakpoint));

  if (isMobileMediaQuery) return null;

  return <>{children}</>;
};

export default HideMediaContainer;
