import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { XlnteeColors } from "src/shared/themes/colors";
import ArrowsWordsList from "./ui/ArrowsWordsList";

interface LandingAboutSectionProps {
  title: string;
  wordsList: string[];
  description: string;
  children: ReactNode;
}

const LandingAboutSection: React.FC<LandingAboutSectionProps> = ({ title, wordsList, description, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        mb: 8,
        mx: 2,
      }}
    >
      <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300, ml: 5, mt: 3 }} variant="h3">
        {title}
      </Typography>
      <Stack direction="row" gap={4} margin={4.5}>
        {children}
        <Box display="flex" flexDirection="column" gap={3}>
          <ArrowsWordsList wordsArray={wordsList} />
          <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300 }} variant="h5">
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default LandingAboutSection;
