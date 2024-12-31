import { createTheme, PaletteMode, Theme } from "@mui/material";

import { XlnteeColors } from "./colors";
import { palete } from "./theme-palette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "dark-contain": true;
    "dark-outline": true;
    "dark-text": true;
    "light-contain": true;
    "light-text": true;
  }
}

function getTheme(colorTheme: PaletteMode): Theme {
  const defaultTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
    palette: palete[colorTheme],
    typography: {
      fontFamily: ["Noto Sans", "Roboto", "sans-serif"].join(",")
    }
  });

  defaultTheme.typography.h1 = {
    fontSize: 32,
    lineHeight: 1.2,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 48
    }
  };

  defaultTheme.typography.h2 = {
    fontSize: 30,
    lineHeight: 1.2,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 34
    }
  };

  defaultTheme.typography.h3 = {
    fontSize: 24,
    lineHeight: 1.35
  };

  defaultTheme.typography.h4 = {
    fontSize: 24,
    lineHeight: 1.45
  };

  defaultTheme.typography.h5 = {
    fontSize: 20,
    lineHeight: 1.45
  };

  defaultTheme.typography.h6 = {
    fontSize: 20,
    lineHeight: 1.2
  };

  defaultTheme.typography.body1 = {
    fontSize: 18,
    lineHeight: 1.5,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 20
    }
  };

  defaultTheme.typography.body2 = {
    fontSize: 16,
    lineHeight: 1.35
  };

  defaultTheme.typography.caption = {
    fontSize: 14,
    lineHeight: 1.35
  };

  defaultTheme.components = {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: defaultTheme.palette.text.primary,
          backgroundColor: defaultTheme.palette.text.secondary
        }
      }
    },
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
          fontWeight: 400,
          boxShadow: "none",
          ":hover": {
            boxShadow: "none"
          }
        },
        sizeSmall: {
          fontSize: 14,
          borderRadius: 10,
          height: "auto",
          minHeight: 40
        },
        sizeMedium: {
          fontSize: 14,
          borderRadius: 10,
          height: "auto",
          minHeight: 40,
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16
          }
        },
        sizeLarge: {
          fontSize: 14,
          borderRadius: 10,
          minHeight: 40,
          height: "auto",
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 20,
            minHeight: 50
          }
        }
      },
      variants: [
        {
          props: {
            color: "primary",
            variant: "contained"
          },
          style: {
            ":hover": {
              backgroundColor: defaultTheme.palette.primary.light
            }
          }
        },
        {
          props: {
            color: "primary",
            variant: "outlined"
          },
          style: {
            ":hover": {
              color: defaultTheme.palette.secondary.contrastText,
              backgroundColor: defaultTheme.palette.primary.main
            }
          }
        },
        {
          props: {
            color: "secondary",
            variant: "contained"
          },
          style: {
            ":hover": {
              backgroundColor: defaultTheme.palette.secondary.light
            }
          }
        },
        {
          props: {
            color: "secondary",
            variant: "outlined"
          },
          style: {
            ":hover": {
              color: defaultTheme.palette.secondary.contrastText,
              backgroundColor: defaultTheme.palette.secondary.main
            }
          }
        },
        {
          props: {
            variant: "text"
          },
          style: {
            padding: 0,
            minWidth: "auto",

            ":hover": {
              backgroundColor: "transparent",
              opacity: "0.7"
            }
          }
        },
        {
          props: {
            color: "success",
            variant: "contained"
          },
          style: {
            color: defaultTheme.palette.primary.contrastText
          }
        },
        {
          props: {
            color: "success",
            variant: "outlined"
          },
          style: {
            color: defaultTheme.palette.success.main
          }
        },
        {
          props: {
            variant: "dark-contain",
            size: "small"
          },
          style: {
            fontSize: 14,
            borderRadius: 10,
            height: "auto",
            minHeight: 40,
            backgroundColor:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            color:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
            ":hover": {
              color:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                  : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
              backgroundColor:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor}, 0.9)`
                  : `rgb(${XlnteeColors[colorTheme].LightAccentColor}, 0.9)`
            }
          }
        },
        {
          props: {
            variant: "dark-contain",
            size: "medium"
          },
          style: {
            fontSize: 14,
            borderRadius: 10,
            minHeight: 40,
            height: "auto",
            backgroundColor:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            color:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
            ":hover": {
              color:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                  : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
              backgroundColor:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor}, 0.9)`
                  : `rgb(${XlnteeColors[colorTheme].LightAccentColor}, 0.9)`
            },
            [defaultTheme.breakpoints.up("md")]: {
              fontSize: 16,
              minHeight: 50
            }
          }
        },
        {
          props: {
            variant: "dark-contain",
            size: "large"
          },
          style: {
            fontSize: 14,
            borderRadius: 10,
            height: "auto",
            minHeight: 40,
            backgroundColor:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            color:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
            ":hover": {
              color:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].LightAccentColor})`
                  : `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
              backgroundColor:
                colorTheme === "light"
                  ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor}, 0.9)`
                  : `rgb(${XlnteeColors[colorTheme].LightAccentColor}, 0.9)`
            },
            [defaultTheme.breakpoints.up("md")]: {
              fontSize: 20,
              minHeight: 50
            }
          }
        },
        {
          props: {
            variant: "dark-outline"
          },
          style: {
            color:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            borderColor:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            borderWidth: 1,
            borderStyle: "solid",
            "&:hover": {
              color: defaultTheme.palette.text.secondary,
              backgroundColor: defaultTheme.palette.text.primary
            }
          }
        },
        {
          props: {
            variant: "dark-text"
          },
          style: {
            color:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`
                : `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            padding: 0,
            minWidth: "auto",
            "&:hover": {
              backgroundColor: "transparent"
            }
          }
        },
        {
          props: {
            variant: "light-contain"
          },
          style: {
            color: `rgb(${XlnteeColors[colorTheme].DarkAccentColor})`,
            backgroundColor: `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            boxShadow: `0 2px 6px 0 rgb(${
              colorTheme === "light"
                ? `${XlnteeColors[colorTheme].DarkAccentColor}`
                : `${XlnteeColors[colorTheme].LightAccentColor}`
            }, 0.25)`,
            borderColor: "transparent",
            borderWidth: 0,
            borderStyle: "solid",
            "&:hover": {
              backgroundColor: defaultTheme.palette.info.light
            },
            "&.Mui-disabled": {
              color: `rgb(${XlnteeColors[colorTheme].DarkAccentColor}, 0.5)`
            }
          }
        },
        {
          props: {
            variant: "light-text"
          },
          style: {
            color: `rgb(${XlnteeColors[colorTheme].LightAccentColor})`,
            borderColor: "transparent",
            borderWidth: 0,
            borderStyle: "solid",
            padding: 0,
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "transparent"
            }
          }
        }
      ]
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "inherit",
          fontSize: 16,
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16
          }
        }
      }
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
          color: defaultTheme.palette.text.primary,
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: 16
          },
          "&.Mui-focused": {
            color: `${defaultTheme.palette.text.primary}`
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 36,
          overflow: "hidden",
          borderRadius: 10,
          [defaultTheme.breakpoints.up("md")]: {
            height: 50
          },
          fieldset: {
            borderColor: defaultTheme.palette.grey["300"]
          },
          "&.Mui-disabled": {
            color: defaultTheme.palette.grey["400"],
            backgroundColor:
              colorTheme === "light"
                ? `rgb(${XlnteeColors[colorTheme].LightGrayColor})`
                : `rgb(${XlnteeColors[colorTheme].LightGrayColor}, 0.1)`
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: defaultTheme.palette.grey["300"],
            backgroundColor: "transparent"
          },

          "&.Mui-focused fieldset": {
            borderColor: defaultTheme.palette.text.primary,
            borderWidth: 4
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: defaultTheme.palette.warning.main
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: `${defaultTheme.palette.text.primary} !important`,
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
            color: defaultTheme.palette.warning.main
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            height: 20,
            color: "inherit",
            backgroundColor: "transparent",
            fontSize: 14,
            paddingBlock: 8,
            paddingInline: 10,
            textAlign: "inherit",

            "&::placeholder": {
              color: defaultTheme.palette.grey["400"]
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
          backgroundColor: defaultTheme.palette.grey["200"]
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
            color: defaultTheme.palette.text.primary
          },
          "&.Mui-checked": {
            color: defaultTheme.palette.text.primary
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
          backgroundColor: "transparent",
          backgroundImage: "none"
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
  };

  return defaultTheme;
}

export default getTheme;
