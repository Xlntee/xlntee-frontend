import { createTheme } from "@mui/material";

import { XlnteeColors, YouniColors } from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "black-contain": true;
    "black-outline": true;
    "black-text": true;
    "white-contain": true;
    "white-text": true;
  }
}

export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: XlnteeColors.BrandColor,
      contrastText: XlnteeColors.LightColor
    },
    secondary: {
      main: XlnteeColors.CallToActionColor,
      contrastText: XlnteeColors.LightColor
    },
    warning: {
      main: XlnteeColors.WarningBaseColor,
      "100": XlnteeColors.WarningExtraLightColor,
      "200": XlnteeColors.WarningLightColor
    },
    success: {
      main: XlnteeColors.SuccessBaseColor,
      "100": XlnteeColors.SuccessExtraLightColor,
      "200": XlnteeColors.SuccessLightColor,
      "900": XlnteeColors.SuccessDarkColor
    },
    info: {
      main: XlnteeColors.LinkColor,
      light: XlnteeColors.Violet100
    },
    grey: {
      "100": XlnteeColors.LightElementColor,
      "200": XlnteeColors.GrayStrokeColor,
      "300": XlnteeColors.GrayColor300,
      "400": XlnteeColors.GrayColor400,
      "500": XlnteeColors.GrayColor500,
      "600": XlnteeColors.GrayColor600,
      "700": XlnteeColors.GrayColor700,
      "800": XlnteeColors.GrayColor800
    },
    text: {
      primary: XlnteeColors.BlackTextColor,
      secondary: XlnteeColors.BlackElementColor
    }
  },
  typography: {
    fontFamily: ["Noto Sans", "Roboto", "sans-serif"].join(",")
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: YouniColors.DarkGray,
          height: 75
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: 20
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 216,
          borderRadius: 20
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8
        }
      }
    },
    MuiRating: {
      styleOverrides: {
        sizeSmall: {
          fontSize: "16px"
        },
        sizeLarge: {
          fontSize: "24px"
        }
      }
    }
  }
});

defaultTheme.typography.h1 = {
  fontSize: 32,
  lineHeight: 1.2,
  color: XlnteeColors.BlackTextColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 48
  }
};

defaultTheme.typography.h2 = {
  fontSize: 30,
  lineHeight: 1.2,
  color: XlnteeColors.BlackTextColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 34
  }
};

defaultTheme.typography.h3 = {
  fontSize: 28,
  lineHeight: 1.35,
  color: XlnteeColors.BlackTextColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 30
  }
};

defaultTheme.typography.h4 = {
  fontSize: 24,
  lineHeight: 1.45,
  color: XlnteeColors.BlackTextColor
};

defaultTheme.typography.h5 = {
  fontSize: 20,
  lineHeight: 1.45,
  color: XlnteeColors.BlackTextColor
};

defaultTheme.typography.h6 = {
  fontSize: 18,
  lineHeight: 1.2,
  color: XlnteeColors.BlackTextColor
};

defaultTheme.typography.body1 = {
  fontSize: 18,
  lineHeight: 1.5,
  color: XlnteeColors.BlackTextColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 20
  }
};

defaultTheme.typography.body2 = {
  fontSize: 16,
  lineHeight: 1.35,
  color: XlnteeColors.BlackTextColor
};

defaultTheme.typography.caption = {
  fontSize: 14,
  lineHeight: 1.35,
  color: XlnteeColors.BlackTextColor
};

defaultTheme.components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: 1320,
        paddingInline: 20,
        [defaultTheme.breakpoints.up("sm")]: {
          maxWidth: 1320,
          paddingInline: 20
        },
        [defaultTheme.breakpoints.up("md")]: {
          maxWidth: 1320,
          paddingInline: 20
        },
        [defaultTheme.breakpoints.up("lg")]: {
          maxWidth: 1320,
          paddingInline: 20
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        lineHeight: 1.4,
        fontWeight: 700,
        boxShadow: "none",
        ":hover": {
          boxShadow: "none"
        }
      },
      sizeSmall: {
        fontSize: 14,
        borderRadius: 5,
        height: "auto",
        minHeight: 36
      },
      sizeMedium: {
        fontSize: 14,
        borderRadius: 5,
        height: "auto",
        minHeight: 36,
        [defaultTheme.breakpoints.up("md")]: {
          fontSize: 16,
          minHeight: 50
        }
      },
      sizeLarge: {
        fontSize: 14,
        borderRadius: 5,
        height: "auto",
        minHeight: 36,
        [defaultTheme.breakpoints.up("md")]: {
          fontSize: 20,
          minHeight: 60
        }
      }
    },
    variants: [
      {
        props: {
          variant: "text"
        },
        style: {
          padding: 0,
          minWidth: "auto",

          ":hover": {
            backgroundColor: "transparent"
          }
        }
      },
      {
        props: {
          color: "success",
          variant: "contained"
        },
        style: {
          color: XlnteeColors.LightColor
        }
      },
      {
        props: {
          color: "success",
          variant: "outlined"
        },
        style: {
          color: XlnteeColors.SuccessBaseColor
        }
      },
      {
        props: {
          variant: "black-contain",
          size: "small"
        },
        style: {
          fontSize: 14,
          borderRadius: 5,
          height: "auto",
          minHeight: 36,
          backgroundColor: XlnteeColors.DarkColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.BlackTextColor
          }
        }
      },
      {
        props: {
          variant: "black-contain",
          size: "medium"
        },
        style: {
          fontSize: 14,
          borderRadius: 5,
          minHeight: 36,
          height: "auto",
          backgroundColor: XlnteeColors.DarkColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.BlackTextColor
          },
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16,
            minHeight: 50
          }
        }
      },
      {
        props: {
          variant: "black-contain",
          size: "large"
        },
        style: {
          fontSize: 14,
          borderRadius: 5,
          height: "auto",
          minHeight: 36,
          backgroundColor: XlnteeColors.DarkColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.BlackTextColor
          },
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 20,
            minHeight: 60
          }
        }
      },
      {
        props: {
          variant: "black-outline"
        },
        style: {
          color: XlnteeColors.DarkColor,
          borderColor: XlnteeColors.DarkColor,
          borderWidth: 1,
          borderStyle: "solid",
          "&:hover": {
            color: XlnteeColors.LightColor,
            backgroundColor: XlnteeColors.DarkColor
          }
        }
      },
      {
        props: {
          variant: "white-contain",
          size: "medium"
        },
        style: {
          color: XlnteeColors.BrandColor,
          backgroundColor: XlnteeColors.LightColor,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: XlnteeColors.Violet100
          }
        }
      },
      {
        props: {
          variant: "white-text",
          size: "medium"
        },
        style: {
          color: XlnteeColors.LightColor,
          borderColor: "transparent",
          borderWidth: 0,
          borderStyle: "solid",
          padding: 0
        }
      },
      {
        props: {
          variant: "black-text"
        },
        style: {
          color: XlnteeColors.DarkColor,
          padding: 0,
          minWidth: "auto",

          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      }
    ]
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        lineHeight: 1.4,
        marginBottom: 2,
        "&.Mui-focused": {
          color: `${XlnteeColors.DarkColor}`
        }
      }
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        height: 36,
        overflow: "hidden",

        [defaultTheme.breakpoints.up("md")]: {
          height: 50
        },
        fieldset: {
          borderColor: defaultTheme.palette.grey["400"]
        },
        "&.Mui-focused fieldset": {
          borderColor: XlnteeColors.DarkColor,
          borderWidth: 4
        }
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: `${XlnteeColors.DarkColor} !important`,
          borderWidth: `1px !important`
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginInline: 0
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        input: {
          height: 20,
          color: XlnteeColors.BlackTextColor,
          backgroundColor: XlnteeColors.LightColor,
          fontSize: 14,
          paddingBlock: 8,
          paddingInline: 10,
          textAlign: "inherit",

          "&::placeholder": {
            color: defaultTheme.palette.grey["700"]
          },

          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16,
            height: 34,
            paddingInline: 14
          }
        }
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        width: "100%",
        "& .MuiSelect-outlined": {
          fontSize: 14,
          textAlign: "inherit",

          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16
          }
        }
      }
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        height: 26,
        backgroundColor: XlnteeColors.GrayStrokeColor
      }
    }
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0
      },
      sizeMedium: {
        width: 26,
        height: 26,
        "& .MuiSvgIcon-root": {
          fontSize: 26,
          color: XlnteeColors.DarkColor
        },
        "&.Mui-checked": {
          color: XlnteeColors.DarkColor
        }
      }
    }
  },
  MuiAutocomplete: {
    styleOverrides: {
      input: {
        "&.MuiAutocomplete-input": {
          paddingBlock: 8,
          paddingLeft: 0,
          paddingRight: 10,
          fontSize: 14,
          textAlign: "inherit",

          [defaultTheme.breakpoints.up("md")]: {
            paddingRight: 14,
            fontSize: 16
          }
        }
      },
      inputRoot: {
        padding: 0,
        height: 36,
        paddingLeft: 10,

        [defaultTheme.breakpoints.up("md")]: {
          height: 50,
          paddingLeft: 14
        }
      }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiAlert: {
    styleOverrides: {
      action: {
        paddingTop: 0
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: "14px !important",
        paddingInline: 10
      }
    }
  }
};
