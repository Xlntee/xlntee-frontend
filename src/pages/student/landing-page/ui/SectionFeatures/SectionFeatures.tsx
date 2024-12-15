import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { Box, Button, Container, Grid } from "@mui/material";

import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { AppRoutes } from "src/shared/routes";
import { Feature } from "src/widgets/components";

const icons: JSX.Element[] = [
  <TrendingUpOutlinedIcon key={1} color="primary" />,
  <DashboardOutlinedIcon key={2} color="primary" />,
  <CreditCardIcon key={3} color="primary" />,
  <PlayCircleOutlinedIcon key={4} color="primary" />,
  <QuizOutlinedIcon key={5} color="primary" />,
  <StarIcon key={6} color="primary" />,
  <WorkspacePremiumOutlinedIcon key={7} color="primary" />,
  <VisibilityOutlinedIcon key={8} color="primary" sx={{ fontSize: "28px" }} />
];

const SectionFeatures: FC = () => {
  const { t, ready } = useTranslation("student-landing");
  const captionList = t("features-section.caption", { returnObjects: true }) as string[];
  const descriptionList = t("features-section.description", { returnObjects: true }) as string[];
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
                        "last-with-line": caption === captionList[captionList.length - (columnCount - 1)]
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
                className="button-rounded-md"
              >
                {t("features-section.button")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionFeatures;
