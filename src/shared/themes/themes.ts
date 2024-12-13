import { createTheme } from "@mui/material";

import { XlnteeColors } from "./colors";

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
      main: XlnteeColors.BrandColor,
      contrastText: XlnteeColors.LightColor
    },
    warning: {
      main: XlnteeColors.WarningBaseColor,
      light: XlnteeColors.ErrorLightColor
    },
    success: {
      main: XlnteeColors.SuccessBaseColor
    },
    info: {
      main: XlnteeColors.BrandColor,
      light: XlnteeColors.Violet100,
      dark: XlnteeColors.Violet200
    },
    grey: {
      "100": XlnteeColors.LightElementColor,
      "200": XlnteeColors.GrayStrokeColor,
      "300": XlnteeColors.GrayColor300,
      "400": XlnteeColors.GrayColor400,
      "500": XlnteeColors.GrayColor500
    },
    text: {
      primary: XlnteeColors.MainBlackElementColor,
      secondary: XlnteeColors.MainBlackElementColor
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
  color: XlnteeColors.MainBlackElementColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 48
  }
};

defaultTheme.typography.h2 = {
  fontSize: 30,
  lineHeight: 1.2,
  color: XlnteeColors.MainBlackElementColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 48
  }
};

defaultTheme.typography.h3 = {
  fontSize: 24,
  lineHeight: 1.35,
  color: XlnteeColors.MainBlackElementColor
};

defaultTheme.typography.h4 = {
  fontSize: 20,
  lineHeight: 1.45,
  color: XlnteeColors.MainBlackElementColor
};

defaultTheme.typography.h5 = {
  fontSize: 16,
  lineHeight: 1.45,
  color: XlnteeColors.MainBlackElementColor
};

defaultTheme.typography.h6 = {
  fontSize: 16,
  lineHeight: 1.2,
  color: XlnteeColors.MainBlackElementColor
};

defaultTheme.typography.body1 = {
  fontSize: 18,
  lineHeight: 1.5,
  color: XlnteeColors.MainBlackElementColor,

  [defaultTheme.breakpoints.up("lg")]: {
    fontSize: 20
  }
};

defaultTheme.typography.body2 = {
  fontSize: 16,
  lineHeight: 1.35,
  color: XlnteeColors.MainBlackElementColor
};

defaultTheme.typography.caption = {
  fontSize: 14,
  lineHeight: 1.35,
  color: XlnteeColors.MainBlackElementColor
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
          backgroundColor: XlnteeColors.MainBlackElementColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.MainBlackElementColor
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
          backgroundColor: XlnteeColors.MainBlackElementColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.MainBlackElementColor
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
          backgroundColor: XlnteeColors.MainBlackElementColor,
          color: XlnteeColors.LightColor,
          ":hover": {
            backgroundColor: XlnteeColors.MainBlackElementColor
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
          color: XlnteeColors.MainBlackElementColor,
          borderColor: XlnteeColors.MainBlackElementColor,
          borderWidth: 1,
          borderStyle: "solid",
          "&:hover": {
            color: XlnteeColors.LightColor,
            backgroundColor: XlnteeColors.MainBlackElementColor
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
          color: XlnteeColors.MainBlackElementColor,
          padding: 0,
          minWidth: "auto",

          "&:hover": {
            backgroundColor: "transparent"
          }
        }
      }
    ]
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        ".MuiButtonBase-root": {
          marginRight: 10
        }
      }
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        lineHeight: 1.4,
        marginBottom: 2,
        "&.Mui-focused": {
          color: `${XlnteeColors.MainBlackElementColor}`
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
          borderColor: defaultTheme.palette.grey["300"]
        },
        "&.Mui-focused fieldset": {
          borderColor: XlnteeColors.MainBlackElementColor,
          borderWidth: 4
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: XlnteeColors.WarningBaseColor
        }
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: `${XlnteeColors.MainBlackElementColor} !important`,
          borderWidth: `1px !important`
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginInline: 0,
        "&.Mui-error": {
          color: XlnteeColors.WarningBaseColor
        }
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        input: {
          height: 20,
          color: XlnteeColors.MainBlackElementColor,
          backgroundColor: XlnteeColors.LightColor,
          fontSize: 14,
          paddingBlock: 8,
          paddingInline: 10,
          textAlign: "inherit",

          "&::placeholder": {
            color: defaultTheme.palette.grey["500"]
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
          color: XlnteeColors.MainBlackElementColor
        },
        "&.Mui-checked": {
          color: XlnteeColors.MainBlackElementColor
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
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        width: "100%",
        boxShadow: "none",
        margin: 32,
        backgroundColor: "transparent"
      }
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 0,
        fontSize: 20,
        marginBottom: 20
      }
    }
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
        marginBottom: 0
      }
    }
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 0,
        marginTop: 20,
        justifyContent: "center",
        gap: "20px"
      }
    }
  }
};
