import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckItem from "pages/landing-page/teacher-landing-page/ui/CheckItem";
import { Link as RouterLink } from "react-router-dom";
import { AppRoutes } from "src/app/routing/appRoutes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const StudentHeroSection = () => {
  const theme = useTheme();
  const { t } = useTranslation("student-landing");
  const features: string[] = t("features", { returnObjects: true });
  const isFeaturesArray = Array.isArray(features);
  const currentLanguage = i18next.language;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      mb="120px"
      p="0 37px"
      sx={{
        gap: currentLanguage === "uk" ? "100px" : "0",
        [theme.breakpoints.down(1024)]: {
          gap: 0,
        },
      }}
    >
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
            padding: "5px 20px",
            borderRadius: "25px",
          }}
          component="span"
        >
          {t("subtitle")}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap="20px" mb="30px" maxWidth="700px">
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
            padding: "15px 52px",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          {t("heroButton")}
        </Button>
      </Box>
      <img width="396px" height="391px" src="assets/student-landing-hero.png" alt="hero-section-image" />
    </Stack>
  );
};

export default StudentHeroSection;
