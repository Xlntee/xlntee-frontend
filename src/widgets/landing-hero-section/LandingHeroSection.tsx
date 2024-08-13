import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { AppRoutes } from "src/app/routing/appRoutes";
import CheckItem from "./ui/CheckItem";
import React from "react";

interface LandingHeroSectionProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  features: string[];
  imgWidth: number | string;
  imgHeight: number | string;
  imgSrc: string;
  imgAlt: string;
}

const LandingHeroSection: React.FC<LandingHeroSectionProps> = ({
  title,
  subtitle,
  buttonTitle,
  features,
  imgWidth = "400px",
  imgHeight = "400px",
  imgSrc,
  imgAlt,
}) => {
  const theme = useTheme();
  const isFeaturesArray = Array.isArray(features);

  return (
    <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" mb={15} px={2}>
      <Box>
        <Typography color="primary" sx={{ fontWeight: 700, mb: 2 }} variant="h3">
          {title}
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            bgcolor: theme.palette.primary.main,
            fontWeight: 400,
            color: "#fff",
            py: 1,
            px: 3,
            mb: 4,
            borderRadius: "25px",
          }}
          variant="h6"
        >
          {subtitle}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2} mb={4} maxWidth="700px">
          {isFeaturesArray && features.map((feature, index) => <CheckItem key={index}>{feature}</CheckItem>)}
        </Stack>
        <Button
          component={RouterLink}
          to={AppRoutes.auth}
          color="secondary"
          variant="contained"
          sx={{
            borderRadius: "50px",
            py: 2,
            px: 6,
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          {buttonTitle}
        </Button>
      </Box>
      <img width={imgWidth} height={imgHeight} src={imgSrc} alt={imgAlt} />
    </Stack>
  );
};

export default LandingHeroSection;
