import { lazy } from "react";

import BaseNavigationDrawer from "./BaseNavigationDrawer/BaseNavigationDrawer";
import NotificationsDrawer from "./NotificationsDrawer/NotificationsDrawer";
import CreateCourseDrawer from "./CreateCourseDrawer/CreateCourseDrawer";

const drawers = {
  NOTIFICATIONS_DRAWER: NotificationsDrawer,
  BASE_NAVIGATION_DRAWER: BaseNavigationDrawer,
  CREATE_COURSE_DRAWER: CreateCourseDrawer,
  STUDENT_COURSE_NAVIGATION_DRAWER: lazy(() => import("./StudentCourseNavigationDrawer/StudentCourseNavigationDrawer")),
  TEACHER_CREATE_COURSE_NAVIGATION_DRAWER: lazy(
    () => import("./TeacherCreateCourseNavigationDrawer/TeacherCreateCourseNavigationDrawer")
  )
} as const;

export default drawers;
