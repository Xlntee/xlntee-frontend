import { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Breakpoint } from "@mui/material";
import { defaultTheme } from "src//shared/themes/themes";

type HideMediaContainerProps = {
  children: React.ReactNode;
  type: "up" | "down";
  breakpoint: Breakpoint;
};

const HideMediaContainer: FC<HideMediaContainerProps> = ({ children, type, breakpoint }) => {
  const isMobileMediaQuery = useMediaQuery(defaultTheme.breakpoints[type](breakpoint));

  if (isMobileMediaQuery) return null;

  return <>{children}</>;
};

export default HideMediaContainer;
