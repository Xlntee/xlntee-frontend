import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Button, Grid, Container } from "@mui/material";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { AppRoutes } from "src/app/routing/appRoutes";
import { Feature } from "src/widgets/components";

//TODO: implement refactoring before component’s declaration

const icons: JSX.Element[] = [
  <TrendingUpOutlinedIcon color="primary" />,
  <DashboardOutlinedIcon color="primary" />,
  <CreditCardIcon color="primary" />,
  <SettingsSuggestOutlinedIcon color="primary" />,
  <PlayCircleOutlinedIcon color="primary" />,
  <QuizOutlinedIcon color="primary" />,
  <WorkspacePremiumOutlinedIcon color="primary" />,
  <VisibilityOutlinedIcon color="primary" sx={{ fontSize: "28px" }} />,
];

const SectionFeatures = () => {
  const { t, ready } = useTranslation("teacher-landing");
  const captionList: string[] = t("teacher-landing.features-section.caption", { returnObjects: true });
  const descriptionList: string[] = t("teacher-landing.features-section.description", { returnObjects: true });
  const columnCount = 3;

  if (!ready) return "";

  return (
    <Box component="section" className="section-feature">
      <Container>
        <Box className="section-feature__wrapper">
          <Grid container columnSpacing={{ sm: "20px" }}>
            {captionList.length
              ? captionList.map((caption, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} className="section-feature__feature-col">
                    <Feature
                      icon={icons[index]}
                      caption={caption}
                      description={descriptionList[index]}
                      className={cn({
                        "with-line":
                          index === 0 ||
                          (index % columnCount === 0 &&
                            caption !== captionList[captionList.length - (columnCount - 1)]),
                        "last-with-line": caption === captionList[captionList.length - (columnCount - 1)],
                      })}
                    />
                  </Grid>
                ))
              : null}
            <Grid item md={4} className="section-feature__feature-col">
              <Button
                component={RouterLink}
                to={AppRoutes.auth.base}
                color="primary"
                variant="contained"
                size="medium"
                sx={{
                  borderRadius: "25px",
                }}
              >
                {t("teacher-landing.features-section.Button")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionFeatures;
