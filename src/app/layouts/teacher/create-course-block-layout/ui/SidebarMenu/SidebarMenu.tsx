import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button } from "@mui/material";

import { Progress } from "src/shared/ui";

import { NavigationList } from "../NavigationList";

import "./SidebarMenu.scss";

const SidebarMenu: FC = () => {
  const { t } = useTranslation("teacher-create-course");
  const { t: tCommon } = useTranslation("common");

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
          {t("publish.nav-title")}
        </Button>
      </Stack>
      <Stack gap="10px">
        <Progress value={0} title={t("storage")} color="warning">
          11/120 {tCommon("memory-gb")}
        </Progress>
        <Progress value={0} title={t("students")} color="info">
          0/100
        </Progress>
        <Button size="small" variant="black-contain" className="button-rounded-sm">
          {t("change-plan")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default memo(SidebarMenu);
