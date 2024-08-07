import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckItem from "./CheckItem";
import { Link as RouterLink } from "react-router-dom";
import { AppRoutes } from "src/app/routing/appRoutes";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const theme = useTheme();
  const { t } = useTranslation("teacher-landing");
  const features: string[] = t("features", { returnObjects: true });
  const isFeaturesArray = Array.isArray(features);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-around" p='0 40px' mb='128px'>
      <Box>
        <Typography
          color="primary"
          mb="15px"
          sx={{ fontFamily: "Noto Sans", fontWeight: 700, fontSize: "48px", lineHeight: "50px" }}
          component="h1"
        >
          {t("heroTitle")}
        </Typography>
        <Typography
          mb="30px"
          sx={{
            display: "inline-block",
            bgcolor: theme.palette.primary.main,
            fontFamily: "Noto Sans",
            fontWeight: 400,
            fontSize: "20px",
            color: "#fff",
            padding: "3px 27px",
            borderRadius: "25px",
          }}
          component="span"
        >
          {t("subtitle")}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap="20px" mb="30px" maxWidth="600px">
          {isFeaturesArray && features.map((feature, index) => <CheckItem key={index}>{feature}</CheckItem>)}
        </Stack>
        <Button
          component={RouterLink}
          to={AppRoutes.auth}
          color="secondary"
          variant="contained"
          sx={{
            borderRadius: "50px",
            fontFamily: "Noto Sans",
            padding: "15px 57px",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          {t("heroButton")}
        </Button>
      </Box>
      <img width="467px" height="467px" src="assets/teacher-landing-hero.png" alt="hero-section-image" />
    </Stack>
  );
};

export default HeroSection;
