import { PaletteMode, ThemeOptions } from "@mui/material";
import { XlnteeColors } from "./colors";

export const palete: Record<PaletteMode, Partial<ThemeOptions["palette"]>> = {
  light: {
    mode: "light",
    primary: {
      main: XlnteeColors["light"].BrandColor,
      contrastText: XlnteeColors["light"].LightColor
    },
    secondary: {
      main: XlnteeColors["light"].ActionColor,
      contrastText: XlnteeColors["light"].LightColor
    },
    warning: {
      main: XlnteeColors["light"].WarningBaseColor,
      light: XlnteeColors["dark"].ErrorLightColor
    },
    success: {
      main: XlnteeColors["light"].SuccessBaseColor
    },
    info: {
      main: XlnteeColors["light"].BrandColor,
      light: XlnteeColors["light"].Violet100,
      dark: XlnteeColors["light"].Violet200
    },
    grey: {
      "100": XlnteeColors["light"].LightElementColor,
      "200": XlnteeColors["light"].GrayStrokeColor,
      "300": XlnteeColors["light"].GrayColor300,
      "400": XlnteeColors["light"].GrayColor400,
      "500": XlnteeColors["light"].GrayColor500
    },
    text: {
      primary: XlnteeColors["light"].MainBlackElementColor,
      secondary: XlnteeColors["light"].ThemeDarkAccentColor
    }
  },
  dark: {
    mode: "dark",
    primary: {
      main: XlnteeColors["light"].BrandColor,
      contrastText: XlnteeColors["dark"].LightColor
    },
    secondary: {
      main: XlnteeColors["dark"].ActionColor,
      contrastText: XlnteeColors["dark"].LightColor
    },
    warning: {
      main: XlnteeColors["dark"].WarningBaseColor,
      light: XlnteeColors["dark"].ErrorLightColor
    },
    success: {
      main: XlnteeColors["dark"].SuccessBaseColor
    },
    info: {
      main: XlnteeColors["dark"].BrandColor,
      light: XlnteeColors["dark"].Violet100,
      dark: XlnteeColors["dark"].Violet200
    },
    grey: {
      "100": XlnteeColors["dark"].LightElementColor,
      "200": XlnteeColors["dark"].GrayStrokeColor,
      "300": XlnteeColors["dark"].GrayColor300,
      "400": XlnteeColors["dark"].GrayColor400,
      "500": XlnteeColors["dark"].GrayColor500
    },
    text: {
      primary: XlnteeColors["dark"].LightColor,
      secondary: XlnteeColors["dark"].ThemeDarkAccentColor
    }
  }
};
