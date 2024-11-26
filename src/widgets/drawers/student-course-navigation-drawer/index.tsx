import { FC } from "react";

import useDrawer from "src/hooks/useDrawer";
import useHeaderNavigationStudent from "src/hooks/useHeaderNavigationStudent";

import NavigationDrawer from "../navigation-drawer";

const StudentCourseNavigationDrawer: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();

  const { navigationList } = useHeaderNavigationStudent();
  const isOpen = isOpenDrawer("STUDENT_COURSE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default StudentCourseNavigationDrawer;
