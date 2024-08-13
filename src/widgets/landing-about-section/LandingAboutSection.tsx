import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { XlnteeColors } from "src/shared/themes/colors";

interface LandingAboutSectionProps {
  title: string;
  wordsList: string[];
  description: string;
  imgWidth: number | string;
  imgHeight: number | string;
  imgSrc: string;
  imgAlt: string;
}

const LandingAboutSection: React.FC<LandingAboutSectionProps> = ({
  title,
  wordsList,
  description,
  imgWidth = "320px",
  imgHeight = "320px",
  imgSrc,
  imgAlt,
}) => {
  const isWordsListArray = Array.isArray(wordsList);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
      }}
      mb={8}
    >
      <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300, ml: 5, mt: 3 }} variant="h3">
        {title}
      </Typography>
      <Stack direction="row" gap={4} margin={4.5}>
        <img width={imgWidth} height={imgHeight} src={imgSrc} alt={imgAlt} />
        <Box display="flex" flexDirection="column" gap={3}>
          <Box display="flex" alignItems="center">
            {isWordsListArray &&
              wordsList.map((word, index) => (
                <Typography
                  key={index}
                  color="primary"
                  sx={{
                    fontWeight: 300,
                    position: "relative",
                    mr: "40px",
                    "&::after": {
                      content: '"\\003E"',
                      color: (theme) => theme.palette.primary.main,
                      position: "absolute",
                      right: "-25px",
                    },
                    "&:last-child::after": {
                      content: '""',
                      margin: 0,
                    },
                  }}
                  variant="h5"
                >
                  {word}
                </Typography>
              ))}
          </Box>
          <Typography color={XlnteeColors.BlackTextColor} sx={{ fontWeight: 300 }} variant="h5">
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default LandingAboutSection;
