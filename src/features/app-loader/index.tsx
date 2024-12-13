import { Box, CircularProgress } from "@mui/material";
import { XlnteeColors } from "src/shared/themes/colors";

export function AppLoader(): JSX.Element {
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
        backgroundColor: XlnteeColors.LightColor
      }}
    >
      <CircularProgress />
    </Box>
  );
}
