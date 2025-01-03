import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography, Stack, useTheme, Grid } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import { PricePlanCard, PricePlanProps } from "src/shared/ui";
import { PricePlanContentProps } from "src/shared/types/price-plan-content";
import useInverseColor from "src/shared/hooks/useInverseColor";

const SectionPricePlan: FC = () => {
  const theme = useTheme();
  const { getInverseColor } = useInverseColor();
  const { t } = useTranslation("teacher-landing");

  const cards = t("price-plan.cards", { returnObjects: true }) as PricePlanContentProps[];

  const pricePlanCard1: PricePlanProps = {
    ...cards[0],
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
    <Box component="section" className="section-price-plan" py="40px">
      <Container>
        <Box maxWidth="1050px" marginInline="auto">
          <Box p="20px" mb="40px" borderRadius="20px" border={`1px solid ${theme.palette.grey["200"]}`}>
            <Stack direction={{ md: "row-reverse" }} justifyContent={{ md: "space-between" }} gap="20px">
              <Box>
                <Typography variant="body2" fontSize={20} fontWeight={700}>
                  {t("price-plan.title-plan")}
                </Typography>
              </Box>
              <Box maxWidth="400px">
                <Typography variant="body2" fontSize={18} fontWeight={400}>
                  {t("price-plan.title")}
                </Typography>
                <Typography variant="body2" fontWeight={300}>
                  {t("price-plan.description")}
                </Typography>
              </Box>
            </Stack>
          </Box>
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

export default SectionPricePlan;
