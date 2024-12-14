import { Box, CircularProgress, useTheme } from "@mui/material";

export function AppLoader(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: theme.palette.primary.contrastText
      }}
    >
      <CircularProgress />
    </Box>
  );
}
