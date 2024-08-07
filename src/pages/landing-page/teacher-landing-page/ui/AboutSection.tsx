import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { XlnteeColors } from "src/shared/themes/colors";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation("teacher-landing");
  const words: string[] = t("aboutWordList", { returnObjects: true });
  const iswordsArray = Array.isArray(words);
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        mb: "60px",
      }}
    >
      <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300, fontSize: "48px", pt: "35px" }}>
        {t("aboutTitle")}
      </Typography>
      <Stack direction="row" gap="30px" margin="38px 88px">
        <img width="320px" height="320px" src="assets/teacher-landing-about.png" alt="about section image" />
        <Box display="flex" flexDirection="column" gap="20px">
          <Box display="flex" alignItems="center">
            {iswordsArray &&
              words.map((word, index) => (
                <React.Fragment key={index}>
                  <Typography color="primary" sx={{ fontWeight: 300, fontSize: "24px" }} component="span">
                    {word}
                  </Typography>
                  {index < words.length - 1 && (
                    <Typography
                      component="span"
                      sx={{ margin: "0 20px", color: (theme) => theme.palette.primary.main }}
                    >
                      &gt;
                    </Typography>
                  )}
                </React.Fragment>
              ))}
          </Box>
          <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300, fontSize: "24px" }}>
            {t("aboutDescription")}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutSection;
