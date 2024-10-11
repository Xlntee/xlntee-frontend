import { Box, Grid, Container, Typography, Stack } from "@mui/material";
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
    <Box component="section" className="section-price-plan" py="40px">
      <Container>
        <Box maxWidth="1050px" marginInline="auto">
          <Box border={`1px solid ${XlnteeColors.GrayStrokeColor}`} borderRadius="20px" p="20px" mb="40px">
            <Stack direction={{ md: "row-reverse" }} justifyContent={{ md: "space-between" }} gap="20px">
              <Box>
                <Typography variant="h5">Тарифні Плани</Typography>
              </Box>
              <Box maxWidth="400px">
                <Typography variant="h6" fontWeight={400}>
                  Як це працює
                </Typography>
                <Typography variant="body2" fontWeight={300}>
                  Тарифні плани дійють на основі комісії з продажу. Не потрібно платити до запуску курси або в процесі
                  його створення, ви платите тільки після початку продажів, ніяких додаткових витрат.
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
