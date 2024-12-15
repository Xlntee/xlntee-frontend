import { FC } from "react";

import useDrawer from "src/shared/hooks/useDrawer";
import NavigationDrawer from "../navigation-drawer";
import useHeaderNavigation from "src/shared/hooks/useHeaderNavigation";

const TeacherCreateCourseNavigationDrawer: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();

  const { navigationList } = useHeaderNavigation("teacher");
  const isOpen = isOpenDrawer("TEACHER_CREATE_COURSE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default TeacherCreateCourseNavigationDrawer;
