import { PaletteMode, ThemeOptions } from "@mui/material";
import { XlnteeColors } from "./colors";

export const palete: Record<PaletteMode, Partial<ThemeOptions["palette"]>> = {
  light: {
    mode: "light",
    primary: {
      main: XlnteeColors["light"].BrandColor,
      contrastText: XlnteeColors["light"].WhiteColor
    },
    secondary: {
      main: XlnteeColors["light"].ActionColor,
      contrastText: XlnteeColors["light"].WhiteColor
    },
    warning: {
      main: XlnteeColors["light"].ErrorTextColor,
      light: XlnteeColors["dark"].ErrorBackgroundColor
    },
    success: {
      main: XlnteeColors["light"].SuccessFontColor
    },
    info: {
      main: XlnteeColors["light"].BrandColor,
      light: XlnteeColors["light"].LightBrandColor
    },
    grey: {
      "100": XlnteeColors["dark"].LightGrayColor,
      "200": XlnteeColors["dark"].StrokeGrayColor,
      "300": XlnteeColors["dark"].InputFieldBorderColor,
      "400": XlnteeColors["dark"].FilledTextColor
    },
    text: {
      primary: XlnteeColors["light"].MainBlackColor,
      secondary: XlnteeColors["light"].ThemeDarkAccentColor
    }
  },
  dark: {
    mode: "dark",
    primary: {
      main: XlnteeColors["light"].BrandColor,
      contrastText: XlnteeColors["dark"].WhiteColor
    },
    secondary: {
      main: XlnteeColors["dark"].ActionColor,
      contrastText: XlnteeColors["dark"].WhiteColor
    },
    warning: {
      main: XlnteeColors["dark"].ErrorTextColor,
      light: XlnteeColors["dark"].ErrorBackgroundColor
    },
    success: {
      main: XlnteeColors["dark"].SuccessFontColor
    },
    info: {
      main: XlnteeColors["dark"].BrandColor,
      light: XlnteeColors["dark"].LightBrandColor
    },
    grey: {
      "100": XlnteeColors["dark"].LightGrayColor,
      "200": XlnteeColors["dark"].StrokeGrayColor,
      "300": XlnteeColors["dark"].InputFieldBorderColor,
      "400": XlnteeColors["dark"].FilledTextColor
    },
    text: {
      primary: XlnteeColors["dark"].WhiteColor,
      secondary: XlnteeColors["dark"].ThemeDarkAccentColor
    }
  }
};
