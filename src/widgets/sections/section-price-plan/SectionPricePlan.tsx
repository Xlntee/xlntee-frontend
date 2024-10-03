import { Box, Grid, Container } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import QuizIcon from "@mui/icons-material/Quiz";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import { PricePlanCard, PricePlanProps } from "src/features";
import { XlnteeColors } from "src/shared/themes/colors";

const SectionPricePlan = () => {
  const pricePlanCard1: PricePlanProps = {
    pretitle: "Easy Start",
    title: "Процент %",
    text: "Швидкий стар без додаткових витрат. Створюй курси, розвивай продукт та рости.",
    buttonText: "Обрати",
    bgColor: XlnteeColors.LightElementColor,
    descriptionList: [
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        title: "Необмежена кількість курсів",
        text: "Створюйте необмежену кількість курсів",
      },
      {
        icon: <AllInclusiveIcon sx={{ fontSize: "30px" }} />,
        title: "Необмежена кількість студентів",
        text: "Ніяких обмежень на продажі, будьте вільні у розвитку вашого продукту",
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        title: "Професійна підтримка акаунтів",
        text: "Отримайте підтримку у продовж всього шляху створення та розвитку вашого контенту",
      },
    ],
  };

  const pricePlanCard2: PricePlanProps = {
    pretitle: "Enterprise",
    title: "Процент %",
    text: "Запускайте курси швидше, керуйте бізнесом ефективніше, працюйте вільніше.",
    buttonText: "Замовити демо",
    bgColor: XlnteeColors.Violet200,
    descriptionList: [
      {
        icon: <OfflineBoltIcon sx={{ fontSize: "30px" }} />,
        title: "Швидке ствоерння контету",
        text: "Запускайте маштабні курси швидко з підтримкою нашої команди",
      },
      {
        icon: <QuizIcon sx={{ fontSize: "30px" }} />,
        title: "Керуання кількома курсами",
        text: "Оптимізуйте роботу з централізованим керуванням продуктами.",
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
        title: "Професійна підтримка акаунтів",
        text: "Отримайте пріоритетну підтримку й індивідуальне навчання для вас та вашої команди. ",
      },
    ],
  };

  return (
    <Box component="section" className="section-price-plan">
      <Container>
        <Grid container spacing="40px">
          <Grid item xs={12} md={6} display="flex">
            <PricePlanCard {...pricePlanCard1} />
          </Grid>
          <Grid item xs={12} md={6} display="flex">
            <PricePlanCard {...pricePlanCard2} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionPricePlan;
