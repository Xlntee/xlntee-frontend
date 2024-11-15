import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button } from "@mui/material";

import { Progress } from "src/features";

import { NavigationList } from "../NavigationList";

import "./SidebarMenu.scss";

const SidebarMenu: FC = () => {
  const { t } = useTranslation("teacher-create-course");

  return (
    <Stack gap="20px" className="create-course-layout__aside-menu">
      <Stack className="create-course-nav" direction="column" gap="10px">
        <NavigationList />
        <Button
          variant="black-text"
          size="small"
          fullWidth
          disabled
          className="create-course-nav__action button-rounded-sm"
        >
          {t("publish.nav_title")}
        </Button>
      </Stack>
      <Stack gap="10px">
        <Progress value={0} title={t("storage")} color="warning">
          11/120 ГБ
        </Progress>
        <Progress value={0} title={t("students")} color="info">
          0/100
        </Progress>
        <Button size="small" variant="black-contain" className="button-rounded-sm">
          {t("change_plan")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default memo(SidebarMenu);
