import { createTheme } from "@mui/material";
import { YouniColors } from "./colors";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2D51F7",
    },
    secondary: {
      main: "#35C587",
    },
  },
  typography: {
    fontFamily: ["Noto Sans", "Roboto", "sans-serif"].join(","),
  },
  components: {
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
        sizeLarge: {
          height: 56,
        },
      },
    },
  },
});
