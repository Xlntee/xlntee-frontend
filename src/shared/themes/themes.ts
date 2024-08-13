import { createTheme } from "@mui/material";
import { XlnteeColors, YouniColors } from "./colors";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: XlnteeColors.BrandColor,
    },
    secondary: {
      main: XlnteeColors.CallToActionColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          boxShadow: "none",
        },
        sizeLarge: {
          height: 56,
        },
      },
    },
  },
});
