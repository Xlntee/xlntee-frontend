import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Paper, Stack, Typography } from "@mui/material";

import { XlnteeColors } from "src/shared/themes/colors";
import { InfoField } from "src/features/user-manager";

interface CourseCategoriesProps {
  title: string;
  items: string[];
}

const CourseCategories: FC<CourseCategoriesProps> = ({ title, items }) => {
  const { t } = useTranslation("user-manager");
  const name = t("courseCategories.name");

  return (
    <Paper elevation={12}>
      <Box p="10px">
        <Typography variant="body2" color={XlnteeColors.BlackElementColor} mb="14px">
          {title}
        </Typography>
        {items.length ? (
          <Stack gap="12px">
            {items.map((item, index) => (
              <InfoField key={index} title={index === 0 ? name : undefined} value={item} />
            ))}
          </Stack>
        ) : null}
      </Box>
    </Paper>
  );
};

export default CourseCategories;
