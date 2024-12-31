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
      main: `rgb(${XlnteeColors["light"].ErrorTextColor})`,
      light: `rgb(${XlnteeColors["dark"].ErrorBackgroundColor})`
    },
    success: {
      main: `rgb(${XlnteeColors["light"].SuccessFontColor})`
    },
    info: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: `rgb(${XlnteeColors["light"].LightBrandColor})`
    },
    grey: {
      "100": `rgb(${XlnteeColors["dark"].LightGrayColor})`,
      "200": `rgb(${XlnteeColors["dark"].StrokeGrayColor})`,
      "300": `rgb(${XlnteeColors["dark"].InputFieldBorderColor})`,
      "400": `rgb(${XlnteeColors["dark"].FilledTextColor})`,
      "900": `rgb(${XlnteeColors["dark"].DarkAccentColor})`
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
      main: `rgb(${XlnteeColors["dark"].ErrorTextColor})`,
      light: `rgb(${XlnteeColors["dark"].ErrorBackgroundColor})`
    },
    success: {
      main: `rgb(${XlnteeColors["dark"].SuccessFontColor})`
    },
    info: {
      main: `rgb(${XlnteeColors["light"].BrandColor})`,
      light: `rgb(${XlnteeColors["dark"].LightBrandColor})`
    },
    grey: {
      "100": `rgb(${XlnteeColors["dark"].LightGrayColor})`,
      "200": `rgb(${XlnteeColors["dark"].StrokeGrayColor})`,
      "300": `rgb(${XlnteeColors["dark"].InputFieldBorderColor})`,
      "400": `rgb(${XlnteeColors["dark"].FilledTextColor})`,
      "900": `rgb(${XlnteeColors["dark"].DarkAccentColor})`
    },
    text: {
      primary: `rgb(${XlnteeColors["light"].LightAccentColor})`,
      secondary: `rgb(${XlnteeColors["light"].DarkAccentColor})`
    }
  }
};
