import { createTheme } from "@mui/material";

import { XlnteeColors, YouniColors } from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "black-contain": true;
    "black-outline": true;
    "black-text": true;
  }
}

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: XlnteeColors.BrandColor,
      contrastText: XlnteeColors.LightColor,
    },
    secondary: {
      main: XlnteeColors.CallToActionColor,
      contrastText: XlnteeColors.LightColor,
    },
    warning: {
      main: XlnteeColors.WarningBaseColor,
      "100": XlnteeColors.WarningExtraLightColor,
      "200": XlnteeColors.WarningLightColor,
    },
    success: {
      main: XlnteeColors.SuccessBaseColor,
      "100": XlnteeColors.SuccessExtraLightColor,
      "200": XlnteeColors.SuccessLightColor,
      "900": XlnteeColors.SuccessDarkColor,
    },
    info: {
      main: XlnteeColors.LinkColor,
    },
    grey: {
      "100": XlnteeColors.LightElementColor,
      "200": XlnteeColors.GrayStrokeColor,
      "300": XlnteeColors.GrayColor300,
      "400": XlnteeColors.GrayColor400,
      "500": XlnteeColors.GrayColor500,
      "600": XlnteeColors.GrayColor600,
      "700": XlnteeColors.GrayColor700,
    },
    text: {
      primary: XlnteeColors.BlackTextColor,
      secondary: XlnteeColors.BlackElementColor,
    },
  },
  typography: {
    fontFamily: ["Noto Sans", "Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: YouniColors.DarkGray,
          height: 75,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: 20,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 216,
          borderRadius: 20,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
  },
});

defaultTheme.typography.h1 = {
  fontSize: 32,
  lineHeight: 1.04,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 48,
  },
};

defaultTheme.typography.h2 = {
  fontSize: 30,
  lineHeight: 1.02,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 34,
  },
};

defaultTheme.typography.h3 = {
  fontSize: 28,
  lineHeight: 1,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 30,
  },
};

defaultTheme.typography.h4 = {
  fontSize: 24,
  lineHeight: 1,
};

defaultTheme.typography.h5 = {
  fontSize: 20,
  lineHeight: 1,
};

defaultTheme.typography.h6 = {
  fontSize: 18,
  lineHeight: 1,
};

defaultTheme.typography.body1 = {
  fontSize: 20,
  lineHeight: 1.5,
  color: XlnteeColors.BlackTextColor,
};

defaultTheme.typography.body2 = {
  fontSize: 16,
  lineHeight: 1.35,
  color: XlnteeColors.BlackTextColor,
};

defaultTheme.components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: 1280,
        paddingInline: 20,
        [defaultTheme.breakpoints.up("sm")]: {
          maxWidth: 1280,
          paddingInline: 20,
        },
        [defaultTheme.breakpoints.up("md")]: {
          maxWidth: 1280,
          paddingInline: 20,
        },
        [defaultTheme.breakpoints.up("lg")]: {
          maxWidth: 1280,
          paddingInline: 20,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        lineHeight: 1.4,
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
      },
      sizeSmall: {
        fontSize: 12,
        borderRadius: 5,
        height: 36,
        [defaultTheme.breakpoints.up("lg")]: {
          fontSize: 14,
        },
        [defaultTheme.breakpoints.up("xl")]: {
          height: 40,
        },
      },
      sizeMedium: {
        fontSize: 12,
        borderRadius: 5,
        height: 36,
        [defaultTheme.breakpoints.up("lg")]: {
          fontSize: 16,
        },
        [defaultTheme.breakpoints.up("xl")]: {
          height: 50,
        },
      },
      sizeLarge: {
        fontSize: 12,
        borderRadius: 5,
        [defaultTheme.breakpoints.up("lg")]: {
          fontSize: 16,
        },
        [defaultTheme.breakpoints.up("xl")]: {
          fontSize: 20,
          height: 60,
        },
      },
    },
    variants: [
      {
        props: {
          color: "success",
          variant: "contained",
        },
        style: {
          color: XlnteeColors.LightColor,
        },
      },
      {
        props: {
          color: "success",
          variant: "outlined",
        },
        style: {
          color: XlnteeColors.SuccessBaseColor,
        },
      },
      {
        props: {
          variant: "black-contain",
        },
        style: {
          backgroundColor: XlnteeColors.DarkColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.BlackTextColor,
          },
        },
      },
      {
        props: {
          variant: "black-outline",
        },
        style: {
          color: XlnteeColors.DarkColor,
          borderColor: XlnteeColors.DarkColor,
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
      {
        props: {
          variant: "black-text",
        },
        style: {
          color: XlnteeColors.DarkColor,
        },
      },
    ],
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        lineHeight: 1.4,
        marginBottom: 2,
        "&.Mui-focused": {
          color: `${XlnteeColors.DarkColor}`,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: 50,
        fieldset: {
          borderColor: defaultTheme.palette.grey["400"],
        },
        "&.Mui-focused fieldset": {
          borderColor: XlnteeColors.DarkColor,
          borderWidth: 4,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: `${XlnteeColors.DarkColor} !important`,
          borderWidth: `1px !important`,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        input: {
          height: 34,
          color: XlnteeColors.BlackTextColor,
          fontSize: 16,
          paddingBlock: 8,
          paddingInline: 14,
          "&::placeholder": {
            color: defaultTheme.palette.grey["700"],
          },
        },
      },
    },
  },
};
