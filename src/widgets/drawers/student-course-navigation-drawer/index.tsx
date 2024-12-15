import { FC } from "react";

import useDrawer from "src/shared/hooks/useDrawer";
import useHeaderNavigation from "src/shared/hooks/useHeaderNavigation";

import NavigationDrawer from "../navigation-drawer";

const StudentCourseNavigationDrawer: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();

  const { navigationList } = useHeaderNavigation("student");
  const isOpen = isOpenDrawer("STUDENT_COURSE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default StudentCourseNavigationDrawer;
