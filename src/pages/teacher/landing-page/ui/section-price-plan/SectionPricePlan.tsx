import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Typography, Stack } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";
import { PricePlanList } from "src/widgets/components";

const SectionPricePlan: FC = () => {
  const { t } = useTranslation("teacher-landing");

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
          <PricePlanList />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionPricePlan;
