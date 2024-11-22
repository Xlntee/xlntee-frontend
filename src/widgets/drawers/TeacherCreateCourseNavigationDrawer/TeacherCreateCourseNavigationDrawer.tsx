import { FC } from "react";

import useDrawer from "src/hooks/useDrawer";
import useHeaderNavigationTeacher from "src/hooks/useHeaderNavigationTeacher";
import { NavigationDrawer } from "../NavigationDrawer";

const TeacherCreateCourseNavigationDrawer: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();

  const { navigationList } = useHeaderNavigationTeacher();
  const isOpen = isOpenDrawer("TEACHER_CREATE_COURSE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default TeacherCreateCourseNavigationDrawer;
