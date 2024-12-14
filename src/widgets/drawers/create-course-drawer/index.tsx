import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import { SidebarMenu } from "src/app/layouts/teacher/create-course-block-layout/ui";

import DrawerHeader from "../drawer-header";
import DrawerBody from "../drawer-body";

const CreateCourseDrawer: FC = () => {
  const { t } = useTranslation("teacher-create-course");

  return (
    <>
      <DrawerHeader>
        <Typography variant="body1" className="drawer__title">
          {t("course-navigation")}
        </Typography>
      </DrawerHeader>
      <DrawerBody>
        <SidebarMenu />
      </DrawerBody>
    </>
  );
};

export default CreateCourseDrawer;
