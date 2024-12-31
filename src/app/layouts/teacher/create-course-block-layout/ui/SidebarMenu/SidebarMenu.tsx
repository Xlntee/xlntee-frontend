import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { Stack, Button } from "@mui/material";

import { NavigationList } from "../NavigationList";

import "./SidebarMenu.scss";

const SidebarMenu: FC = () => {
  const { t } = useTranslation("teacher-create-course");

  return (
    <Stack className="create-course-nav base-shadow" direction="column" gap="10px">
      <NavigationList />
      <Button
        variant="dark-text"
        size="small"
        fullWidth
        disabled
        className="create-course-nav__action button-rounded-sm"
      >
        {t("publish.nav-title")}
      </Button>
    </Stack>
  );
};

export default memo(SidebarMenu);
