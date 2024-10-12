import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import { PricePlanCard, PricePlanProps } from "src/features";
import { XlnteeColors } from "src/shared/themes/colors";
import { useTranslation } from "react-i18next";

interface PricePlanContentProps {
  pretitle: string;
  title: string;
  text: string;
  button: string;
  descriptionList: {
    title: string;
    text: string;
  }[];
}

const SectionPricePlan = () => {
  const { t } = useTranslation("teacher-landing");

  const cards: PricePlanContentProps[] = t("price-plan.cards", { returnObjects: true });

  const pricePlanCard1: PricePlanProps = {
    ...cards[0],
    bgColor: XlnteeColors.LightElementColor,
    descriptionList: [
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[0],
      },
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[1],
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        ...cards[0].descriptionList[2],
      },
    ],
  };

  const pricePlanCard2: PricePlanProps = {
    ...cards[1],
    bgColor: XlnteeColors.Violet200,
    descriptionList: [
      {
        icon: <OfflineBoltIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[0],
      },
      {
        icon: <QuizIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[1],
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        ...cards[1].descriptionList[2],
      },
    ],
  };

  return (
    <Box component="section" className="section-price-plan" py="40px">
      <Container>
        <Box maxWidth="1050px" marginInline="auto">
          <Box border={`1px solid ${XlnteeColors.GrayStrokeColor}`} borderRadius="20px" p="20px" mb="40px">
            <Stack direction={{ md: "row-reverse" }} justifyContent={{ md: "space-between" }} gap="20px">
              <Box>
                <Typography variant="h5">{t("price-plan.title-plan")}</Typography>
              </Box>
              <Box maxWidth="400px">
                <Typography variant="h6" fontWeight={400}>
                  {t("price-plan.title")}
                </Typography>
                <Typography variant="body2" fontWeight={300}>
                  {t("price-plan.description")}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Grid container spacing={{ xs: "30px", lg: "50px" }}>
              <Grid item xs={12} md={6} display="flex">
                <PricePlanCard {...pricePlanCard1} />
              </Grid>
              <Grid item xs={12} md={6} display="flex">
                <PricePlanCard {...pricePlanCard2} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionPricePlan;
