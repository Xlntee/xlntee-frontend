import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Grid, useTheme } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import { PricePlanCard, PricePlanProps } from "src/features";

type PricePlanContentProps = {
  pretitle: string;
  title: string;
  text: string;
  button: string;
  descriptionList: {
    title: string;
    text: string;
  }[];
};

const PricePlanList: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation("teacher-landing");

  const cards = t("price-plan.cards", { returnObjects: true }) as PricePlanContentProps[];

  const pricePlanCard1: PricePlanProps = {
    ...cards[0],
    bgColor: theme.palette.grey["100"],
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
    bgColor: theme.palette.info.dark,
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
    <Grid container spacing={{ xs: "30px", lg: "50px" }}>
      <Grid item xs={12} md={6} display="flex">
        <PricePlanCard {...pricePlanCard1} />
      </Grid>
      <Grid item xs={12} md={6} display="flex">
        <PricePlanCard {...pricePlanCard2} />
      </Grid>
    </Grid>
  );
};

export default PricePlanList;
