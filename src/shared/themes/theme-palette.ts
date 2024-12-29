import { PaletteMode, ThemeOptions } from "@mui/material";
import { XlnteeColors } from "./colors";

export const palete: Record<PaletteMode, Partial<ThemeOptions["palette"]>> = {
  light: {
    mode: "light",
    primary: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: `rgb(${XlnteeColors["light"].BrandColor}, 0.9)`,
      contrastText: `rgb(${XlnteeColors["light"].LightAccentColor})`
    },
    secondary: {
      main: `rgb(${XlnteeColors["light"].ActionColor})`,
      light: `rgb(${XlnteeColors["light"].ActionColor}, 0.9)`,
      contrastText: `rgb(${XlnteeColors["light"].LightAccentColor})`
    },
    warning: {
      main: XlnteeColors["light"].ErrorTextColor,
      light: XlnteeColors["dark"].ErrorBackgroundColor
    },
    success: {
      main: XlnteeColors["light"].SuccessFontColor
    },
    info: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: XlnteeColors["light"].LightBrandColor
    },
    grey: {
      "100": XlnteeColors["dark"].LightGrayColor,
      "200": XlnteeColors["dark"].StrokeGrayColor,
      "300": XlnteeColors["dark"].InputFieldBorderColor,
      "400": XlnteeColors["dark"].FilledTextColor
    },
    text: {
      primary: `rgb(${XlnteeColors["light"].DarkAccentColor})`,
      secondary: `rgb(${XlnteeColors["light"].LightAccentColor})`
    }
  },
  dark: {
    mode: "dark",
    primary: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: `rgb(${XlnteeColors["light"].BrandColor}, 0.9)`,
      contrastText: `rgb(${XlnteeColors["light"].LightAccentColor})`
    },
    secondary: {
      main: `rgb(${XlnteeColors["light"].ActionColor})`,
      light: `rgb(${XlnteeColors["light"].ActionColor}, 0.9)`,
      contrastText: `rgb(${XlnteeColors["light"].LightAccentColor})`
    },
    warning: {
      main: XlnteeColors["dark"].ErrorTextColor,
      light: XlnteeColors["dark"].ErrorBackgroundColor
    },
    success: {
      main: XlnteeColors["dark"].SuccessFontColor
    },
    info: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: XlnteeColors["dark"].LightBrandColor
    },
    grey: {
      "100": XlnteeColors["dark"].LightGrayColor,
      "200": XlnteeColors["dark"].StrokeGrayColor,
      "300": XlnteeColors["dark"].InputFieldBorderColor,
      "400": XlnteeColors["dark"].FilledTextColor
    },
    text: {
      primary: `rgb(${XlnteeColors["light"].LightAccentColor})`,
      secondary: `rgb(${XlnteeColors["light"].DarkAccentColor})`
    }
  }
};
