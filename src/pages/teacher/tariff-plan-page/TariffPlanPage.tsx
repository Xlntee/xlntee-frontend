import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, useTheme, Grid } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import useTitle from "src/shared/hooks/useTitle";
import { PageProps } from "pages/type";
import useInverseColor from "src/shared/hooks/useInverseColor";
import { PricePlanCard, PricePlanProps } from "src/shared/ui";
import { PricePlanContentProps } from "src/shared/types/price-plan-content";

const TariffPlanPage: FC<PageProps> = ({ title }) => {
  useTitle(title);
  const theme = useTheme();

  const { getInverseColor } = useInverseColor();
  const { t } = useTranslation("teacher-landing");

  const cards = t("price-plan.cards", { returnObjects: true }) as PricePlanContentProps[];

  const pricePlanCard1: PricePlanProps = {
    ...cards[0],
    isDefault: true,
    bgColor: getInverseColor(theme.palette.grey["100"], "transparent"),
    descriptionList: [
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[0]
      },
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[1]
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[2]
      }
    ]
  };

  const pricePlanCard2: PricePlanProps = {
    ...cards[1],
    bgColor: getInverseColor(theme.palette.info.light, "transparent"),
    descriptionList: [
      {
        icon: <OfflineBoltIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[0]
      },
      {
        icon: <QuizIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[1]
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[2]
      }
    ]
  };

  return (
    <Box component="section" py="40px">
      <Container>
        <Box maxWidth="1050px" marginInline="auto">
          <Grid container spacing={{ xs: "30px", lg: "50px" }}>
            <Grid item xs={12} md={6} display="flex">
              <PricePlanCard {...pricePlanCard1} />
            </Grid>
            <Grid item xs={12} md={6} display="flex">
              <PricePlanCard {...pricePlanCard2} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TariffPlanPage;
